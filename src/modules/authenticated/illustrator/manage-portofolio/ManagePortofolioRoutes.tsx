import { Route, Routes } from "react-router-dom";
import asyncComponent from "../../../../core/common_components/asyncComponent";
import NotFound from "../../../../core/common_components/NotFound";

function ManagePortofolioRoutes(): JSX.Element {
  return (
    <Routes>
      <Route index element={asyncComponent(() => import("./presentation/features/portofolio/Portofolio"))} />
      <Route path="edit/*" element={asyncComponent(() => import("./presentation/features/edit-portofolio/EditPortofolio"))} />
      <Route path="be-verified/*">
        <Route index element={asyncComponent(() => import("./presentation/features/be_verified/BeVerifiedIllustrator"))} />
        <Route path="sent" element={asyncComponent(() => import("./presentation/features/be_verified/components/SendIllustratorAccountVerificationSuccess"))} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default ManagePortofolioRoutes;
