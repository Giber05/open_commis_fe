import LoginPage from "../../modules/guest/authentication/presentation/features/Login/LoginPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CommissionPostListPage from "../../modules/guest/commission_post/presentation/features/commission_post_list/CommissionPostListPage";
import OpenCommissAPP from "../common_components/main_app/app/OpenCommissApp";
import RegistrationPage from "../../modules/guest/authentication/presentation/features/Registration/RegistrationPage";
import AuthenticationModule from "../../modules/guest/authentication/AuthenticationIndex";
import CommissionPost from "../../modules/guest/commission_post/ComPost";
import ManageComPost from "../../modules/authenticated/illustrator/manage_compost/ManageComPostIndex";
import OpenCommissIlustrator from "../common_components/main_app/app/OpenCommissIlustrator";
function AppRoutes(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<OpenCommissAPP />}>
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
