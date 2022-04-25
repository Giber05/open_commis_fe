import { Route, Routes } from "react-router-dom";
import asyncComponent from "../../../../core/common_components/asyncComponent";
import NotFound from "../../../../core/common_components/NotFound";

function OrderCustomerRoutes(): JSX.Element {
  return (
    <Routes>
      <Route index element={asyncComponent(() => import("./presentation/OrderPage"))} />
        <Route path=":orderId/*">
          <Route index element={asyncComponent(() => import("./presentation/features/detail_order/DetailOrderCustomer"))} />
          <Route path="reviewForm" element={asyncComponent(() => import("./presentation/features/form_review/FormReview"))} />
        </Route>
    </Routes>
  );
}

export default OrderCustomerRoutes;