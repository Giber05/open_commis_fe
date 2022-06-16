import React from "react";
import { Route, Routes } from "react-router-dom";
import asyncComponent from "../../../core/common_components/asyncComponent";

function SupportingInformationRoutes() {
  return (
    <Routes>
      <Route path="privacy-policy" element={asyncComponent(() => import("./presentation/features/privacy_policy/PrivacyPolicy"))} />
    </Routes>
  );
}

export default SupportingInformationRoutes;
