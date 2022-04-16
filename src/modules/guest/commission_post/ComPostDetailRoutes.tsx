import React from "react";
import { Route, Routes } from "react-router-dom";
import asyncComponent from "../../../core/common_components/asyncComponent";

function ComPostDetailRoutes() {
  return (
    <Routes>
      <Route index element={asyncComponent(() => import("./presentation/features/commission_post_detail/ComPostDetail"))} />
      <Route path="detail/*">
        {/* <Route path=":compostId" element={<CommissionPostDetail />} />
      <Route path="ilustrator/:ilustratorId" element={asyncComponent(() => import("."))} /> */}
      </Route>
    </Routes>
  );
}

export default ComPostDetailRoutes;
