import React from "react";
import { Routes, Route } from "react-router-dom";
import asyncComponent from "../../../../core/common_components/asyncComponent";

function VerifyIllustratorAccountRoutes() {
  return (
    <Routes>
      <Route index element={asyncComponent(() => import("./presentation/features/verification_request_list/AccountVerificationRequests"))} />
      <Route path=":illustratorId/*">
        <Route index element={asyncComponent(() => import("./presentation/features/verification_request_detail/AccountVerificationRequestDetail"))} />
      </Route>
    </Routes>
  );
}

export default VerifyIllustratorAccountRoutes;
