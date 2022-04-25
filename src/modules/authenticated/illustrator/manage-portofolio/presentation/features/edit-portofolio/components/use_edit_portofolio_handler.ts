import { message } from "antd";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useAppDispatch } from "../../../../../../../../core/utils/redux";
import { selectAuth } from "../../../../../../../guest/authentication/presentation/reducers/auth_reducer";
import { AddArtwork } from "../../../../domain/usecases/add_artwork";
import { DeleteArtwork } from "../../../../domain/usecases/delete_artwork";
import { EditProfile } from "../../../../domain/usecases/edit_profile";
import { fetchIllustratorProfile, selectManagePortofolio, setisLoadingUpdateProfile } from "../../../reducers/manage_portofolio_slice";

type EditPortofolioConstroller = {
  editProfile: (event: any) => void;
  isLoadingUpdateProfile: boolean;
  addArtwork:(event:any) =>void;
  deleteArtwork:(artworkId:number)=>void
};
function useEditPortofolioHandler(): EditPortofolioConstroller {
  const dispatch = useAppDispatch();
  const { isLoadingUpdateProfile } = useSelector(selectManagePortofolio);
  const navigate = useNavigate();
  const { authUser } = useSelector(selectAuth);
  const editProfileUC = new EditProfile();
  const addArtworkUC = new AddArtwork();
  const deleteArtworkUC = new DeleteArtwork();

  const editProfile = (event: any) => {
    message.loading({ content: "Loading..." });
    let profilePicture = event.profile_picture.map((file: any) => file.originFileObj);

    const formData = new FormData();
    formData.append("profile_picture", profilePicture[0]);
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

  const addArtwork  = (event:any)=>{
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
  }

  const deleteArtwork = (artworkId:number)=>{
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
  }

  return {
    isLoadingUpdateProfile,
    editProfile,
    addArtwork,
    deleteArtwork
  }
}

export default useEditPortofolioHandler;
