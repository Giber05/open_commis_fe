import React from "react";
import "./App.css";
import { ServiceContainer } from "react-service-locator";
import { Provider as StoreProvider } from "react-redux";
import AppRedux from "./core/AppRedux";
import AppService from "./core/AppService";
import AppRoutes from "./core/AppRouter";

function App(): JSX.Element {
  return (
    <ServiceContainer services={AppService}>
      <StoreProvider store={AppRedux}>
        <AppRoutes />
      </StoreProvider>
    </ServiceContainer>
  );
}

export default App;
