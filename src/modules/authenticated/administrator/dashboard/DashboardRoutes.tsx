import React from 'react';
import { Route, Routes } from 'react-router-dom';
import asyncComponent from '../../../../core/common_components/asyncComponent';

function DashboardRoutes() {
  return (
    <Routes>
      <Route index element={asyncComponent(() => import("./presentation/features/dashboard/DashboardPage"))} />
        {/* <Route path=":orderId/*">
          <Route index element={asyncComponent(() => import("./presentation/features/detail_order/DetailOrderCustomer"))} />
        </Route> */}
    </Routes>
  );
}

export default DashboardRoutes;
