import React from 'react';
import { Routes, Route } from 'react-router-dom';
import asyncComponent from '../../../../core/common_components/asyncComponent';

function ManageCompostRoutes() {
  return (
    <Routes>
      <Route index element={asyncComponent(() => import("./presentation/features/show_composts/ManageComPostListPage"))} />
        {/* <Route path=":orderId/*">
          <Route index element={asyncComponent(() => import("./presentation/features/detail_order/DetailOrderCustomer"))} />
        </Route> */}
    </Routes>
  );
}

export default ManageCompostRoutes;
