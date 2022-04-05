import { Route, Routes } from "react-router-dom";
import asyncComponent from "../../../../core/common_components/asyncComponent";
import NotFound from "../../../../core/common_components/NotFound";

function ManageComPostRoutes():JSX.Element {
  return (
    <Routes>
      <Route index element={asyncComponent(() => import("./presentation/features/home/HomePage"))} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default ManageComPostRoutes;
