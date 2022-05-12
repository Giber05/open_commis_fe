import { message, notification } from "antd";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../../../../core/utils/redux";
import GetRegisteredUser from "../../../domain/usecases/get_registered_user";
import { RegisterUser } from "../../../domain/usecases/register_user";
import { ResendVerifEmail } from "../../../domain/usecases/resend_verif_email";
import { isAuthLoading, selectAuth, setRegisteredUser } from "../../reducers/auth_reducer";

export type RegistrationController = {
  isLoadingUser: boolean;
  onFormSubmitted: (values: { role: string; name: string; email: string; phone: string; username: string; password: string; profilePicture?: any }) => void;
  resendVerifEmail:()=>void
};

function useRegistrationHandler(): RegistrationController {
  const dispatch = useAppDispatch();
  const { isLoadingUser,registeredUser } = useSelector(selectAuth);
  const registerUserUC = new RegisterUser();
  const getRegisteredUserUC = new GetRegisteredUser();
  const resendVerifEmailUC = new ResendVerifEmail();
  const navigate = useNavigate();

  const onFormSubmitted = (values: { role: string; name: string; email: string; phone: string; username: string; password: string; profilePicture?: any }) => {
    console.log({ values });

    dispatch(isAuthLoading(true));
    setTimeout(async () => {
      const resource = await registerUserUC.execute({
        name: values.name,
        email: values.email,
        username: values.username,
        password: values.password,
        role: values.role,
        phone: values.phone,
        profilePicture: values.profilePicture == undefined ? null : values.profilePicture[0].originFileObj,
      });
      dispatch(isAuthLoading(false));

      resource.whenWithResult({
        success: async (value) => {
          navigate("/auth/registration/success");
        },
        error:  (error) => {
          notification.error({ message: error.exception.message, placement: "topRight", duration: 5 });

        },
      });
    }, 1000);
  };

  const resendVerifEmail = () => {
    setTimeout(async () => {
      const resource = await getRegisteredUserUC.execute();
      
      resource.whenWithResult({
        success: async (value) => {
        await  dispatch(setRegisteredUser(value.data))
        
      },
        error: async (error) => {
          message.error(error.exception.message)
          dispatch(setRegisteredUser(null))
        },
      });
    },4000);
    
    if (registeredUser != null) {
      setTimeout(async () => {
        message.loading("Mengirim Ulang Email ...")
        const resource = await resendVerifEmailUC.execute({ role: registeredUser?.role, userId: registeredUser?.user.id });
        resource.whenWithResult({
          success: async (value) => {
            message.success(value.data.message);
          },
          error: async (error) => {
            message.success(error.exception.message);
            console.log({ error });
          },
        });
      });
    }else{
      message.error("Gagal mengirim ulang email verifikasi, silahkan coba lagi!")
    }
  };
  return {
    isLoadingUser,
    onFormSubmitted,
    resendVerifEmail
  };
}

export default useRegistrationHandler;
