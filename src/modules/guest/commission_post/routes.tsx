import React from 'react';
import { Routes, Route } from "react-router-dom";
import asyncComponent from '../../../core/common_components/asyncComponent';
import CommissionPostListPage from './presentation/features/commission_post_list/CommissionPostListPage';
function CommissionPostRoute():JSX.Element {
  return <Routes>
      <Route index element={asyncComponent(()=>import("./presentation/features/commission_post_list/CommissionPostListPage"))}/>
  </Routes>;
}

export default CommissionPostRoute;
