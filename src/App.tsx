import React from "react";
import "./App.css";
import { Provider as StoreProvider } from "react-redux";
import AppRedux from "./core/AppRedux";
import AppRoutes from "./core/AppRouter";

function App(): JSX.Element {
  return (
    <StoreProvider store={AppRedux}>
      <AppRoutes />
    </StoreProvider>
  );
}

export default App;
