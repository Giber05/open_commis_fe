import { message, Upload } from "antd";
import { useSelector } from "react-redux";
import { NavigateFunction, useNavigate, useParams } from "react-router-dom";
import { useAppDispatch } from "../../../../../../../core/utils/redux";
import { UploadFileValidation } from "../../../../../../../core/utils/validation/upload_file_validation";
import { UploadFile } from "../../../../../../common/upload_file/domain/usecases/upload_file";
import { selectAuth } from "../../../../../../guest/authentication/presentation/reducers/auth_reducer";
import { CreateOrder } from "../../../domain/usecases/create_order";
import { fetchUploadedFilePath, selectConsumerMakeOrder, setIsLoading, setIsUploadFileLoading, setUploadProgress } from "../../reducers/consumer_make_order_slice";

type MakeOrderController = {
  isLoading: boolean;
  navigate: NavigateFunction;
  uploadFile: (option: any) => void;
  createOrder: (event: any) => void;
};

function useMakeOrderHandler(): MakeOrderController {
  const { compostId } = useParams();
  const dispatch = useAppDispatch();
  const { isLoading, isUploadFileLoading, uploadProgress, uploadedFilePath } = useSelector(selectConsumerMakeOrder);
  const { authUser } = useSelector(selectAuth);
  const navigate = useNavigate();
  const createOrderUC = new CreateOrder();
  const uploadFileUC = new UploadFile();

  const createOrder = (event: any) => {
    message.loading("Loading...");
    const orderForm = new FormData();
    if (event.file != undefined) {
      let referenceFile = event.file.map((file: any) => file.originFileObj);
      if (uploadedFilePath != null) {
        console.log({ uploadedFilePath });

        orderForm.append("reference", referenceFile[0]);
      }
    }
    orderForm.append("requestDetail", event.req_description);
    orderForm.append("commissionId", compostId!);

    dispatch(setIsLoading(true));
    setTimeout(async () => {
      const resource = await createOrderUC.execute({
        token: authUser?.data.token!,
        orderForm: orderForm,
      });

      dispatch(setIsLoading(false));
      resource.whenWithResult({
        success: (value) => {
          message.success(value.data.message, 2);

          navigate(`/consumer/${compostId}/make-order/${value.data.data.id}/created`);
        },
        error: (error) => {
          message.error(error.exception.message, 2);
        },
      });
    });
  };

  const uploadFile = async (options: any) => {
    const { onSuccess, onError, file, onProgress } = options;
    const allowedFileType = ["image/png", "image/jpg", "image/jpeg", "application/pdf"];

    dispatch(fetchUploadedFilePath(null));

    let isValidFile = UploadFileValidation.beforeUploadCheck({ file: options.file, allowedFormat: allowedFileType, maxFileSize: 10 });
    if (!isValidFile) {
      onError("File is not valid");
      return;
    }
    message.loading({ content: "Loading..." });
    const fmData = new FormData();

    const progressConfig = (event: any) => {
      const percent = Math.floor((event.loaded / event.total) * 100);
      dispatch(setUploadProgress(percent));
      if (percent === 100) {
        setTimeout(() => dispatch(setUploadProgress(0)), 1000);
      }
      onProgress({ percent: (event.loaded / event.total) * 100 });
    };
    fmData.append("submission_file", file);

    dispatch(setIsUploadFileLoading(true));
    setTimeout(async () => {
      const resource = await uploadFileUC.execute({ formData: fmData, token: authUser?.data.token!, progressConfig: progressConfig });
      dispatch(setIsUploadFileLoading(false));

      resource.whenWithResult({
        success: (value) => {
          onSuccess(value.data.message);
          dispatch(fetchUploadedFilePath(value.data.data));

          message.success(value.data.message, 2);
        },
        error: (error) => {
          onError(error.exception.message);
          message.error(error.exception.message, 2);
        },
      });
    });
  };

  return {
    isLoading,
    navigate,
    createOrder,
    uploadFile,
  };
}

export default useMakeOrderHandler;
