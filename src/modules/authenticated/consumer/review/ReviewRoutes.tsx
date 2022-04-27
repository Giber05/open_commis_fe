import React from 'react';
import { Route, Routes } from 'react-router-dom';
import asyncComponent from '../../../../core/common_components/asyncComponent';

function ReviewRoutes() {
  return (
    <Routes>
      <Route index element={asyncComponent(() => import("./presentation/features/give_review/AddReviewPage"))} />
    </Routes>
  );
}

export default ReviewRoutes;
