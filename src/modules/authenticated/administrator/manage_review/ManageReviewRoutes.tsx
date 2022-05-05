import React from 'react';
import { Routes, Route } from 'react-router';
import asyncComponent from '../../../../core/common_components/asyncComponent';

function ManageReviewRoutes() {
  return (
    <Routes>
      <Route index element={asyncComponent(() => import("./presentation/features/show_reviews/ReviewListPage"))} />
        {/* <Route path=":orderId/*">
          <Route index element={asyncComponent(() => import("./presentation/features/detail_order/DetailOrderCustomer"))} />
        </Route> */}
    </Routes>
  );
}

export default ManageReviewRoutes;
