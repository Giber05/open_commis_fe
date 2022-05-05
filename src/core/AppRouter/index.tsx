import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Earning from "../../modules/authenticated/illustrator/earning/EarningIndex";
import ManagePortofolio from "../../modules/authenticated/illustrator/manage-portofolio/ManagePortofolioIndex";
import ManageComPost from "../../modules/authenticated/illustrator/manage_compost/ManageComPostIndex";
import Order from "../../modules/authenticated/illustrator/order/OrderIndex";
import AuthenticationModule from "../../modules/guest/authentication/AuthenticationIndex";
import CommissionPost from "../../modules/guest/commission_post/ComPostIndex";
import ComPostDetail from "../../modules/guest/commission_post/ComPostDetailIndex";
import OpenCommissApp from "../common_components/main_app/app/OpenCommissApp";
import OpenCommissIlustrator from "../common_components/main_app/app/OpenCommissIlustrator";
import IllustratorsPortofolio from "../../modules/guest/illustrators_portofolio/IllustratorsPortofolioIndex";
import RequireAuth from "../../modules/guest/authentication/RequireAuth";
import OrderCustomer from "../../modules/authenticated/consumer/order/OrderCustomerIndex";
import Ordering from "../../modules/authenticated/consumer/order/OrderingIndex";
import ProfileCustomer from "../../modules/authenticated/consumer/profile/presentation/ProfileCustomerIndex";
import Review from "../../modules/authenticated/consumer/review/ReviewIndex";
import OpenCommissAdministrator from "../common_components/main_app/app/OpenCommissAdministrator";
import DashboardAdmin from "../../modules/authenticated/administrator/dashboard/DashboardIndex";
import ManageUser from "../../modules/authenticated/administrator/manage_user/ManageUserIndex";
import ManageComPostAdmin from "../../modules/authenticated/administrator/manage_compost/AdminComPostIndex";
import ManageReview from "../../modules/authenticated/administrator/manage_review/ManageReviewIndex";

function AppRoutes(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<OpenCommissApp />}>
          <Route path="/*" element={<CommissionPost />} />
          <Route path=":compostId/*" element={<ComPostDetail />} />
          <Route path="illustrator/*" element={<IllustratorsPortofolio />} />
          <Route path="consumer/*" element={<RequireAuth />}>
            <Route path="order/*" element={<OrderCustomer />} />
            <Route path=":compostId/make-order/*" element={<Ordering />} />
            <Route path=":compostId/add-review/*" element={<Review />} />
            <Route path="profile/*" element={<ProfileCustomer />} />
          </Route>
        </Route>
        <Route path="manage/*" element={<OpenCommissIlustrator />}>
          <Route path="manage-compost/*" element={<ManageComPost />} />
          <Route path="manage-portofolio/*" element={<ManagePortofolio />} />
          <Route path="order/*" element={<Order />} />
          <Route path="earning/*" element={<Earning />} />
        </Route>
        <Route path="admin/*" element={<OpenCommissAdministrator />}>
          <Route index element={<DashboardAdmin />} />
          <Route path="manage-user/*" element={<ManageUser />} />
          <Route path="manage-compost/*" element={<ManageComPostAdmin />} />
          <Route path="manage-review/*" element={<ManageReview />} />
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
