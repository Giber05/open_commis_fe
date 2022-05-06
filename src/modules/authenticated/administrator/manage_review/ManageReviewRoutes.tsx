import React from 'react';
import { Routes, Route } from 'react-router';
import asyncComponent from '../../../../core/common_components/asyncComponent';

function ManageReviewRoutes() {
  return (
    <Routes>
      <Route index element={asyncComponent(() => import("./presentation/features/search_review_by_compost/SearchReviewPage"))} />
         <Route path=":compostId/*">
          <Route path="reviews" element={asyncComponent(() => import("./presentation/features/show_reviews/ReviewListPage"))} />
        </Route> 
    </Routes>
  );
}

export default ManageReviewRoutes;
