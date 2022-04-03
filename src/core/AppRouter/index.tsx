import LoginPage from "../../modules/guest/authentication/presentation/features/Login/LoginPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CommissionPostListPage from "../../modules/guest/commission_post/presentation/features/commission_post_list/CommissionPostListPage";
import OpenCommissAPP from "../common_components/main_app/app/OpenCommissApp";
import RegistrationPage from "../../modules/guest/registration/RegistrationPage";
function AppRoutes(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<OpenCommissAPP />}>
          <Route index element={<CommissionPostListPage />} />
          <Route path="order/*" element="order" />
        </Route>
        <Route path="login/*" element={<LoginPage />} />
        <Route path="registration/*" element={<RegistrationPage />} />
      </Routes>
    </Router>
  );
}
export default AppRoutes;
