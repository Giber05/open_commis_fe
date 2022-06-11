import { message } from "antd";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../../../../../core/utils/redux";
import { UploadFileValidation } from "../../../../../../../core/utils/validation/upload_file_validation";
import { UploadedFileModel } from "../../../../../../common/upload_file/data/models/uploaded_file_model";
import { UploadImage } from "../../../../../../common/upload_file/domain/usecases/upload_image";
import { selectAuth } from "../../../../../../guest/authentication/presentation/reducers/auth_reducer";
import { City } from "../../../data/models/manage_account/city";
import { Province } from "../../../data/models/manage_account/province";
import { GetCities } from "../../../domain/usecases/get_cities";
import { GetProvinces } from "../../../domain/usecases/get_provinces";
import { SendIllustratorAccountVerification } from "../../../domain/usecases/send_illustrator_account_verification";
import {
  fetchCities,
  fetchProvinces,
  fetchUploadedIdCardFilePath,
  fetchUploadedSelfieCardFilePath,
  selectManageAccount,
  setIsGetCitiesLoading,
  setIsGetProvincesLoading,
  setIsSendVerificationLoading,
  setIsUploadFileLoading,
  setSelectedProvince,
  setUploadProgress,
} from "../../reducers/manage_account_slice";

type BeVerifiedIllustratorController = {
  isGetProvincesLoading: boolean;
  isGetCitiesLoading: boolean;
  cities: City[];
  provinces: Province[];
  getProvinces: () => void;
  getCities: () => void;
  selectedProvince: number | null;
  onSelectedProvince: (provinceId: number) => void;
  isUploadFileLoading: boolean;
  uploadedIdCardFilePath: UploadedFileModel | null;
  uploadedSelfieCardFilePath: UploadedFileModel | null;
  uploadIdCardImage: (option: any) => void;
  uploadSelfieCardImage: (option: any) => void;
  sendVerificationAccountReq: (values: any) => void;
  isSendVerificationLoading:boolean;
};
function useBeVerifiedIllustratorHandler(): BeVerifiedIllustratorController {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const getProvincesUC = new GetProvinces();
  const getCitiesUC = new GetCities();
  const uploadImageUC = new UploadImage();
  const sendIllustratorAccountVerificationUC = new SendIllustratorAccountVerification();
  const { cities, provinces, isGetCitiesLoading,isSendVerificationLoading, isGetProvincesLoading, selectedProvince, isUploadFileLoading, uploadedIdCardFilePath, uploadedSelfieCardFilePath } = useSelector(selectManageAccount);
  const { authUser } = useSelector(selectAuth);

  const getProvinces = () => {
    dispatch(setIsGetProvincesLoading(true));
    setTimeout(async () => {
      const resource = await getProvincesUC.execute();

      dispatch(setIsGetProvincesLoading(false));
      resource.whenWithResult({
        success: (value) => {
          dispatch(fetchProvinces(value.data.provinces));
        },
        error: (error) => {
          message.error(error.exception.message, 2);
        },
      });
    });
  };
  const getCities = () => {
    dispatch(setIsGetCitiesLoading(true));
    setTimeout(async () => {
      const resource = await getCitiesUC.execute(selectedProvince == null ? undefined : selectedProvince);

      dispatch(setIsGetCitiesLoading(false));
      resource.whenWithResult({
        success: (value) => {
          dispatch(fetchCities(value.data.cities));
        },
        error: (error) => {
          message.error(error.exception.message, 2);
        },
      });
    });
  };
  const onSelectedProvince = (provinceId: number) => {
    dispatch(setSelectedProvince(provinceId));
  };

  const uploadIdCardImage = async (options: any) => {
    const { onSuccess, onError, file, onProgress } = options;
    const allowedFileType = ["image/png", "image/jpg", "image/jpeg"];

    dispatch(fetchUploadedIdCardFilePath(null));

    let isValidFile = UploadFileValidation.beforeUploadCheck({ file: options.file, allowedFormat: allowedFileType, maxFileSize: 2 });
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
    fmData.append("image", file);

    dispatch(setIsUploadFileLoading(true));
    setTimeout(async () => {
      const resource = await uploadImageUC.execute({ formData: fmData, token: authUser?.data.token!, progressConfig: progressConfig });
      dispatch(setIsUploadFileLoading(false));

      resource.whenWithResult({
        success: (value) => {
          onSuccess(value.data.message);
          dispatch(fetchUploadedIdCardFilePath(value.data.data));
          console.log(value.data);

          message.success(value.data.message, 2);
        },
        error: (error) => {
          onError(error.exception.message);
          message.error(error.exception.message, 2);
        },
      });
    });
  };
  const uploadSelfieCardImage = async (options: any) => {
    const { onSuccess, onError, file, onProgress } = options;
    const allowedFileType = ["image/png", "image/jpg", "image/jpeg"];

    dispatch(fetchUploadedSelfieCardFilePath(null));

    let isValidFile = UploadFileValidation.beforeUploadCheck({ file: options.file, allowedFormat: allowedFileType, maxFileSize: 2 });
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
    fmData.append("image", file);

    dispatch(setIsUploadFileLoading(true));
    setTimeout(async () => {
      const resource = await uploadImageUC.execute({ formData: fmData, token: authUser?.data.token!, progressConfig: progressConfig });
      dispatch(setIsUploadFileLoading(false));

      resource.whenWithResult({
        success: (value) => {
          onSuccess(value.data.message);
          dispatch(fetchUploadedSelfieCardFilePath(value.data.data));
          console.log(value.data);

          message.success(value.data.message, 2);
        },
        error: (error) => {
          onError(error.exception.message);
          message.error(error.exception.message, 2);
        },
      });
    });
  };

  const sendVerificationAccountReq = (values: any) => {
    message.loading({ content: "Loading..." });
    dispatch(setIsSendVerificationLoading(true));
    setTimeout(async () => {
      const iNik: string = values.nik;
      console.log({ iNik });
      const resource = await sendIllustratorAccountVerificationUC.execute({
        token: authUser?.data.token!,
        nik: iNik.toString(),
        address: values.address,
        province: values.province,
        city: values.city,
        background: values.background,
        idCardPhoto: uploadedIdCardFilePath?.path!,
        cardSelfiePhoto: uploadedSelfieCardFilePath?.path!,
      });
      dispatch(setIsSendVerificationLoading(false));

      resource.whenWithResult({
        success: (value) => {
          navigate("sent");
        },
        error: (error) => {
          message.error(error.exception.message, 2);
        },
      });
    });
  };
  return {
    provinces,
    cities,
    getCities,
    isGetCitiesLoading,
    isGetProvincesLoading,
    getProvinces,
    selectedProvince,
    onSelectedProvince,
    uploadIdCardImage,
    uploadedSelfieCardFilePath,
    uploadedIdCardFilePath,
    isUploadFileLoading,
    uploadSelfieCardImage,
    sendVerificationAccountReq,
    isSendVerificationLoading,
  };
}

export default useBeVerifiedIllustratorHandler;
