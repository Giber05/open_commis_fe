import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function AppRoutes(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path="/" element="opencommisapp">
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

