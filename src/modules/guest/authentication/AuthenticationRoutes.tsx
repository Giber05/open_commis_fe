import React from 'react';
import { Route, Routes } from 'react-router-dom';
import asyncComponent from '../../../core/common_components/asyncComponent';
import NotFound from '../../../core/common_components/NotFound';

function AuthenticationRoutes():JSX.Element {
  return (
    <Routes>
      <Route path="login" element={asyncComponent(() => import("./presentation/features/Login/LoginPage"))} />
      <Route path="registration" element={asyncComponent(() => import("./presentation/features/Registration/RegistrationPage"))} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AuthenticationRoutes;
