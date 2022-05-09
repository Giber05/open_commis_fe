import { Route, Routes } from "react-router-dom";
import asyncComponent from "../../../../core/common_components/asyncComponent";

function OrderRoutes() {
  return (
    <Routes>
      <Route index element={asyncComponent(() => import("./presentation/features/list_order/OrderPage"))} />
       <Route path=":orderId/*">
        <Route index element={asyncComponent(() => import("./presentation/features/detail_order/OrderDetailPage"))} />
        <Route path="sendOrder" element={asyncComponent(() => import("./presentation/features/send_order/SendOrder"))} />
        <Route path="rejectOrder" element={asyncComponent(() => import("./presentation/features/detail_order/components/reject_order/Rejectorder"))} />
      </Route>
    </Routes>
  );
}

export default OrderRoutes;