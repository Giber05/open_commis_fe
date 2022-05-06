import React from 'react';
import { Routes, Route } from 'react-router-dom';
import asyncComponent from '../../../core/common_components/asyncComponent';
import NotFound from '../../../core/common_components/NotFound';

function AdminAuthenticationRoutes() {
  return(
    <Routes>
      <Route path="login" element={asyncComponent(() => import("./presentation/features/LoginAdmin/LoginAdminPage"))} />
      
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AdminAuthenticationRoutes;
