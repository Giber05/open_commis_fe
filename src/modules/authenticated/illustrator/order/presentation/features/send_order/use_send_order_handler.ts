import { useNavigate, useParams } from "react-router";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../../../../../core/utils/redux";
import { UploadedFileModel } from "../../../../../../common/upload_file/data/models/uploaded_file_model";
import { fetchUploadedFilePath, selectSendOrder, setIsSendOrderLoading, setIsUploadFileLoading, setUploadProgress } from "../../reducers/illustrator_send_order_slice";
import { selectAuth } from "../../../../../../guest/authentication/presentation/reducers/auth_reducer";
import { UploadSubmissionFile } from "../../../domain/usecases/upload_submission_file";
import { message } from "antd";
import { SendOrder } from "../../../domain/usecases/send_order";
import { UploadFileValidation } from "../../../../../../../core/utils/validation/upload_file_validation";

type SendOrderController = {
  isSendOrderLoading: boolean;
  uploadedFilePath: UploadedFileModel | null;
  uploadProgress: number;
  uploadFile: (option: any) => void;
  sendOrder: (values: any) => void;
  isUploadFileLoading: boolean;
};

function useSendOrderHandler(): SendOrderController {
  const { orderId } = useParams();
  let id = parseInt(orderId!);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isSendOrderLoading, uploadedFilePath, uploadProgress, isUploadFileLoading } = useSelector(selectSendOrder);
  const { authUser } = useSelector(selectAuth);
  const uploadSubmissionFileUC = new UploadSubmissionFile();
  const sendOrderUC = new SendOrder();

  const uploadFile = async (options: any) => {
    const { onSuccess, onError, file, onProgress } = options;
    const allowedFileType = ["image/png", "image/jpg", "image/jpeg", "application/x-zip-compressed"];
    
    dispatch(fetchUploadedFilePath(null))
    
    let isValidFile = UploadFileValidation.beforeUploadCheck({ file: options.file, allowedFormat: allowedFileType, maxFileSize: 20 });
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
      const resource = await uploadSubmissionFileUC.execute({ formData: fmData, token: authUser?.data.token!, progressConfig: progressConfig });
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

  const sendOrder = (values: any) => {
    if(uploadedFilePath==null){
      message.error("Gagal Mengirimkan pesanan")
      return
    }
    message.loading({ content: "Loading..." });
    dispatch(setIsSendOrderLoading(true));
    setTimeout(async () => {
      console.log("Uploadded file", uploadedFilePath?.path);

      const resource = await sendOrderUC.execute({ token: authUser?.data.token!, submissionFile: uploadedFilePath?.path!, description: values.description, cloudLink: values.cloud_link, orderId: id });
      dispatch(setIsSendOrderLoading(false));

      resource.whenWithResult({
        success: (value) => {
          message.success(value.data.message, 2);
          navigate(-1);
        },
        error: (error) => {
          message.error(error.exception.message, 2);
        },
      });
    });
  };
  return {
    isSendOrderLoading,
    uploadFile,
    uploadProgress,
    uploadedFilePath,
    sendOrder,
    isUploadFileLoading,
  };
}
export default useSendOrderHandler;
