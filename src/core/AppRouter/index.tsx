import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ManagePortofolio from "../../modules/authenticated/illustrator/manage-portofolio/ManagePortofolioIndex";
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
          <Route path="manage-portofolio/*" element={<ManagePortofolio />} />
          <Route path="order/*" element="order" />
        </Route>
        <Route path="auth/*" element={<AuthenticationModule />}> 
          <Route path="login/*" element={<ManageComPost />} />
          <Route path="registration/*" element={<ManagePortofolio />} />
        </Route>
      </Routes>
    </Router>
  );
}
export default AppRoutes;
