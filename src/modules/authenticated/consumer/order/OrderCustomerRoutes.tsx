import { Route, Routes } from "react-router-dom";
import asyncComponent from "../../../../core/common_components/asyncComponent";
import NotFound from "../../../../core/common_components/NotFound";

function OrderCustomerRoutes(): JSX.Element {
  return (
    <Routes>
      <Route index element={asyncComponent(() => import("./presentation/features/order_list/OrderListPage"))} />
        <Route path=":orderId/*">
          <Route index element={asyncComponent(() => import("./presentation/features/detail_order/DetailOrderCustomer"))} />
          <Route path="payment-success" element={asyncComponent(() => import("./presentation/features/make_order/components/OrderSuccessPage"))} />
        </Route>
    </Routes>
  );
}

export default OrderCustomerRoutes;

