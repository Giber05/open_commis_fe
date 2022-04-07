import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ManageComPost from "../../modules/authenticated/illustrator/manage_compost/ManageComPostIndex";
import HomePage from "../../modules/authenticated/illustrator/manage_compost/presentation/features/home/HomePage";
import AuthenticationModule from "../../modules/guest/authentication/AuthenticationIndex";
import CommissionPost from "../../modules/guest/commission_post/ComPost";
import OpenCommissApp from "../common_components/main_app/app/OpenCommissApp";
import OpenCommissIlustrator from "../common_components/main_app/app/OpenCommissIlustrator";
function AppRoutes(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<OpenCommissApp />}>
          <Route index element={<CommissionPost />} />
          <Route path="order/*" element="order" />
        </Route>
        <Route path="manage/*" element={<OpenCommissIlustrator />}>
          <Route path="manage-compost/*" element={<ManageComPost />} />
          <Route path="order/*" element="order" />
        </Route>
        <Route path="auth/*" element={<AuthenticationModule />} />
      </Routes>
    </Router>
  );
}
export default AppRoutes;
