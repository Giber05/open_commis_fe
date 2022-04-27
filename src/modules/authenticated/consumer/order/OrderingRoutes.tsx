import { Route, Routes } from "react-router-dom";
import asyncComponent from "../../../../core/common_components/asyncComponent";



function OrderingRoutes(): JSX.Element {
  return (
    <Routes>
      <Route index element={asyncComponent(() => import("./presentation/features/make_order/OrderingForm"))} />
    </Routes>
  );
}

export default OrderingRoutes;