import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../../../../core/utils/redux";
import { RegisterUser } from "../../../domain/usecases/register_user";
import { isAuthLoading, selectAuth } from "../../reducers/auth_reducer";

export type RegistrationController = {
  isLoadingUser: boolean;
  onFormSubmitted: (values: { role: string; name: string; email: string; phone: string; username: string; password: string; profilePicture?: any }) => void;
};

function useRegistrationHandler(): RegistrationController {
  const dispatch = useAppDispatch();
  const { isLoadingUser } = useSelector(selectAuth);
  const registerUserUC = new RegisterUser();
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
          console.log(value.data.data);

          navigate("/");
        },
        error: async (error) => {
          console.log({ error });
        },
      });
    }, 1000);
  };
  return {
    isLoadingUser,
    onFormSubmitted,
  };
}

export default useRegistrationHandler;
