import { Route, Routes } from "react-router-dom";
import asyncComponent from "../../../../core/common_components/asyncComponent";
import NotFound from "../../../../core/common_components/NotFound";

function EarningRoutes() {
  return (
    <Routes>
      <Route index element={asyncComponent(() => import("./presentation/features/balance/EarningPage"))} />
      <Route path="withdraw/*" element={asyncComponent(() => import("./presentation/features/withdrawal/WithdrawalPage"))} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default EarningRoutes;
