import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CommissionPostListPage from "../../modules/commission_post/presentation/features/commission_post_list/CommissionPostListPage";

function AppRoutes(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CommissionPostListPage/>}>
          <Route path="*" element="opencommissmainapp">
            <Route index element="home" />
            <Route path="commission-post/*" element="commission-post" />
            <Route path="order/*" element="order" />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}
export default AppRoutes;

