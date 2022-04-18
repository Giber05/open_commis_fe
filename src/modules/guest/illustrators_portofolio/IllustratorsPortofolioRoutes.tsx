import React from "react";
import { Routes, Route } from "react-router-dom";
import asyncComponent from "../../../core/common_components/asyncComponent";

function IllustratorsPortofolioRoutes() {
  return (
    <Routes>
      <Route path=":illustratorId/" element={asyncComponent(() => import("./presentation/features/portofolio/IllustratorsPortofolioPage"))} />
     
    </Routes>
  );
}

export default IllustratorsPortofolioRoutes;
