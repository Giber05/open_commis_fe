import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import OrderPage from "../../modules/authenticated/consumer/OrderPage";
import Earning from "../../modules/authenticated/illustrator/earning/EarningIndex";
import ManagePortofolio from "../../modules/authenticated/illustrator/manage-portofolio/ManagePortofolioIndex";
import ManageComPost from "../../modules/authenticated/illustrator/manage_compost/ManageComPostIndex";
import AuthenticationModule from "../../modules/guest/authentication/AuthenticationIndex";
import CommissionPost from "../../modules/guest/commission_post/ComPostIndex";
import ComPostDetail from "../../modules/guest/commission_post/ComPostDetailIndex";
import CommissionPostDetail from "../../modules/guest/commission_post/presentation/features/commission_post_detail/ComPostDetail";
import OpenCommissApp from "../common_components/main_app/app/OpenCommissApp";
import OpenCommissIlustrator from "../common_components/main_app/app/OpenCommissIlustrator";
import IllustratorsPortofolio from "../../modules/guest/illustrators_portofolio/IllustratorsPortofolioIndex";
function AppRoutes(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<OpenCommissApp />}>
          <Route index element={<CommissionPost />} />
          <Route path=":compostId/*" element={<ComPostDetail />} />
          <Route path="illustrator/:illustratorId/*" element={<IllustratorsPortofolio />} />
          <Route path="order/*" element={<OrderPage />} />
        </Route>
        <Route path="manage/*" element={<OpenCommissIlustrator />}>
          <Route path="manage-compost/*" element={<ManageComPost />} />
          <Route path="manage-portofolio/*" element={<ManagePortofolio />} />
          <Route path="order/*" element="order" />
          <Route path="earning/*" element={<Earning />} />
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
