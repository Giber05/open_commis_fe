import React from 'react';
import { Routes, Route } from 'react-router-dom';
import asyncComponent from '../../../../core/common_components/asyncComponent';

function ManageUserRoutes() {
 return (
    <Routes>
      <Route index element={asyncComponent(() => import("./presentation/features/show_users/UserListPage"))} />
        {/* <Route path=":orderId/*">
          <Route index element={asyncComponent(() => import("./presentation/features/detail_order/DetailOrderCustomer"))} />
        </Route> */}
    </Routes>
  );
};

export default ManageUserRoutes;
