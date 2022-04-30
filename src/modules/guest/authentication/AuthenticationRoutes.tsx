import React from "react";
import { Route, Routes } from "react-router-dom";
import asyncComponent from "../../../core/common_components/asyncComponent";
import NotFound from "../../../core/common_components/NotFound";

function AuthenticationRoutes(): JSX.Element {
  return (
    <Routes>
      <Route path="login" element={asyncComponent(() => import("./presentation/features/Login/LoginPage"))} />
      <Route path="registration/*">
        <Route index element={asyncComponent(() => import("./presentation/features/Registration/RegistrationPage"))} />
        <Route path="success" element={asyncComponent(() => import("./presentation/features/Registration/components/RegistrationSuccessPage"))} />
        <Route path="verif/failed" element={asyncComponent(() => import("./presentation/features/Registration/components/VerificationFailedPage"))} />
        <Route path="verif/success" element={asyncComponent(() => import("./presentation/features/Registration/components/VerificationSuccessPage"))} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AuthenticationRoutes;
