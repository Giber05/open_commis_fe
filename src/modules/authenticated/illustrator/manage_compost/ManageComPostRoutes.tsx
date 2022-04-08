import { Route, Routes } from "react-router-dom";
import asyncComponent from "../../../../core/common_components/asyncComponent";
import NotFound from "../../../../core/common_components/NotFound";

function ManageComPostRoutes(): JSX.Element {
  return (
    <Routes>
      <Route index element={asyncComponent(() => import("./presentation/features/home/HomePage"))} />
      <Route path=":compostId/*">
        <Route index element={asyncComponent(() => import("./presentation/features/compost_detail/ManageComPostDetail"))} />
        <Route path="edit" element={asyncComponent(() => import("./presentation/features/edit_compost/EditComPost"))} />
      </Route>
      <Route path="create" element={asyncComponent(() => import("./presentation/features/create_compost/CreateComPost"))} />
      <Route path="/" element={<NotFound />} />
    </Routes>
  );
}

export default ManageComPostRoutes;
