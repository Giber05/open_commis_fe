import { Route, Routes } from "react-router-dom";
import asyncComponent from "../../../../../core/common_components/asyncComponent";



function ProfileCustomerRoutes(): JSX.Element {
  return (
    <Routes>
      <Route index element={asyncComponent(() => import("./features/ProfileCustomerPage"))} />
    </Routes>
  );
}

export default ProfileCustomerRoutes;