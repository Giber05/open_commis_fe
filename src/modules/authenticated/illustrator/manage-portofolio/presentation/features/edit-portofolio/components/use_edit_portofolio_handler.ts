import { message } from "antd";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useAppDispatch } from "../../../../../../../../core/utils/redux";
import { UploadFileValidation } from "../../../../../../../../core/utils/validation/upload_file_validation";
import { UploadedFileModel } from "../../../../../../../common/upload_file/data/models/uploaded_file_model";
import { UploadFile } from "../../../../../../../common/upload_file/domain/usecases/upload_file";
import { selectAuth } from "../../../../../../../guest/authentication/presentation/reducers/auth_reducer";
import { AddArtwork } from "../../../../domain/usecases/add_artwork";
import { DeleteArtwork } from "../../../../domain/usecases/delete_artwork";
import { EditProfile } from "../../../../domain/usecases/edit_profile";
import { fetchIllustratorProfile, fetchUploadedFilePath, selectManagePortofolio, setisLoadingUpdateProfile, setIsUploadable, setIsUploadFileLoading, setUploadProgress } from "../../../reducers/manage_portofolio_slice";

type EditPortofolioConstroller = {
  editProfile: (event: any) => void;
  isLoadingUpdateProfile: boolean;
  addArtwork: (event: any) => void;
  deleteArtwork: (artworkId: number) => void;
  uploadableHandler: (file: any) => void;
  isUploadable: boolean;
  uploadedFilePath: UploadedFileModel | null;
  uploadFile: (option: any) => void;
  isUploadFileLoading: boolean;
  uploadProgress: number;
};
function useEditPortofolioHandler(): EditPortofolioConstroller {
  const dispatch = useAppDispatch();
  const { isLoadingUpdateProfile, isUploadable, uploadedFilePath, uploadProgress, isUploadFileLoading } = useSelector(selectManagePortofolio);
  const navigate = useNavigate();
  const { authUser } = useSelector(selectAuth);
  const editProfileUC = new EditProfile();
  const addArtworkUC = new AddArtwork();
  const deleteArtworkUC = new DeleteArtwork();
  const uploadFileUC = new UploadFile();

  const editProfile = (event: any) => {
    message.loading({ content: "Loading..." });

    const formData = new FormData();
    if (event.profile_picture != undefined) {
      let profilePicture = event.profile_picture.map((file: any) => file.originFileObj);
      formData.append("profile_picture", profilePicture[0]);
    }

    formData.append("instagram", event.instagram);
    formData.append("bio", event.bio);
    formData.append("facebook", event.facebook);
    formData.append("twitter", event.twitter);
    formData.append("phone", event.whatsapp);

    dispatch(setisLoadingUpdateProfile(true));
    setTimeout(async () => {
      const resource = await editProfileUC.execute({
        token: authUser?.data.token!,
        formData: formData,
      });

      dispatch(setisLoadingUpdateProfile(false));
      resource.whenWithResult({
        success: (value) => {
          dispatch(fetchIllustratorProfile(value.data.data));
          message.success({ content: value.data.message, duration: 2 });

          navigate(-1);
        },
        error: (error) => {
          message.error({ content: error.exception.message, duration: 2 });
        },
      });
    });
  };

  const addArtwork = (event: any) => {

    if (uploadedFilePath == null) {
      message.error("Gagal Menambahkan Karya!");
      return;
    }

    message.loading({ content: "Loading..." });
    let image = event.artwork_picture.map((file: any) => file.originFileObj);
    const formData = new FormData();
    formData.append("image", image[0]);
    formData.append("description", event.description);

    dispatch(setisLoadingUpdateProfile(true));
    setTimeout(async () => {
      const resource = await addArtworkUC.execute({
        token: authUser?.data.token!,
        formData: formData,
      });

      dispatch(setisLoadingUpdateProfile(false));
      resource.whenWithResult({
        success: (value) => {
          message.success({ content: value.data.message, duration: 2 });

          navigate(-1);
        },
        error: (error) => {
          message.error({ content: error.exception.message, duration: 2 });
        },
      });
    });
  };

  const deleteArtwork = (artworkId: number) => {
    message.loading({ content: "Loading..." });
    dispatch(setisLoadingUpdateProfile(true));
    setTimeout(async () => {
      const resource = await deleteArtworkUC.execute({
        token: authUser?.data.token!,
        artworkId: artworkId,
      });

      dispatch(setisLoadingUpdateProfile(false));
      resource.whenWithResult({
        success: (value) => {
          message.success({ content: value.data.message, duration: 2 });

          navigate(-1);
        },
        error: (error) => {
          message.error({ content: error.exception.message, duration: 2 });
        },
      });
    });
  };

  const uploadableHandler = (value: boolean) => {
    dispatch(setIsUploadable(value));
  };

  const uploadFile = async (options: any) => {
    const { onSuccess, onError, file, onProgress } = options;
    const allowedFileType = ["image/png", "image/jpg", "image/jpeg"];
    
    dispatch(fetchUploadedFilePath(null));

    let isValidFile = UploadFileValidation.beforeUploadCheck({ file: options.file, allowedFormat: allowedFileType, maxFileSize: 5 });
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
    isLoadingUpdateProfile,
    editProfile,
    addArtwork,
    deleteArtwork,
    isUploadable,
    uploadableHandler,
    isUploadFileLoading,
    uploadFile,
    uploadedFilePath,uploadProgress
  };
}

export default useEditPortofolioHandler;
