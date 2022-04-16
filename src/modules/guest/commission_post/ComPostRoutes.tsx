import React from "react";
import { Routes, Route } from "react-router-dom";
import asyncComponent from "../../../core/common_components/asyncComponent";
import CommissionPostDetail from "./presentation/features/commission_post_detail/ComPostDetail";
import ComPostDetail from "./presentation/features/commission_post_detail/ComPostDetail";
function CommissionPostRoute(): JSX.Element {
  return (
    <Routes>
      <Route index element={asyncComponent(() => import("./presentation/features/commission_post_list/CommissionPostListPage"))} />
      <Route path=":compostId/*">
        <Route path="detail/*" element={<CommissionPostDetail />} />
        <Route path="ilustrator/:ilustratorId" element={asyncComponent(() => import("../../authenticated/illustrator/manage-portofolio/presentation/features/portofolio/Portofolio"))} />
      </Route>
    </Routes>
  );
}

export default CommissionPostRoute;
