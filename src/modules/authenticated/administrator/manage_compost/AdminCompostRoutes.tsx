import React from 'react';
import { Routes, Route } from 'react-router-dom';
import asyncComponent from '../../../../core/common_components/asyncComponent';

function ManageCompostRoutes() {
  return (
    <Routes>
      <Route index element={asyncComponent(() => import("./presentation/features/show_composts/AdminComPostListPage"))} />
        <Route path=":compostId/*">
          <Route index element={asyncComponent(() => import("./presentation/features/compost_detail/AdminComPostDetailPage"))} />
        </Route>
    </Routes>
  );
}

export default ManageCompostRoutes;
