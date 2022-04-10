import { Route, Routes } from "react-router-dom";
import asyncComponent from "../../../../core/common_components/asyncComponent";
import NotFound from "../../../../core/common_components/NotFound";

function ManagePortofolioRoutes(): JSX.Element {
  return (
    <Routes>
      <Route index element={asyncComponent(() => import("./presentation/features/portofolio/Portofolio"))} />
      <Route path=":compostId/*"></Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default ManagePortofolioRoutes;
