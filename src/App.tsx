import React from "react";
import "./css/input.css";
import { Provider as StoreProvider } from "react-redux";
import AppRedux from "./core/AppRedux";
import AppRoutes from "./core/AppRouter";
import AuthProvider from "./modules/guest/authentication/presentation/AuthProvider";

function App(): JSX.Element {
  return (
    <StoreProvider store={AppRedux}>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </StoreProvider>
  );
}

export default App;
