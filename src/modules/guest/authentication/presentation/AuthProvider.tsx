import React, { useEffect } from "react";
import { useAppDispatch } from "../../../../core/utils/redux";
import GetCurrentUser from "../domain/usecases/get_current_user";
import { isAuthLoading, userLogin } from "./reducers/auth_reducer";

type Props = {
  children: JSX.Element;
};
function AuthProvider(props: Props): JSX.Element {
  const getCurrentUser = new GetCurrentUser();
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function getAuthUser() {
      dispatch(isAuthLoading(true));
      const resource = await getCurrentUser.execute();
      console.log("Current User:", { resource });

      resource.whenWithResult({
        success: (value) => {
          dispatch(userLogin(value.data));
          dispatch(isAuthLoading(false));
        },
        error: () => {
          dispatch(isAuthLoading(false));
        },
      });
    }
    getAuthUser();
  }, [getCurrentUser, dispatch]);

  return props.children;
}

export default AuthProvider;
