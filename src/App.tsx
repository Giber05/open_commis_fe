import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ServiceContainer } from 'react-service-locator';
import { Provider } from 'react-redux';
import AppRedux from "./core/AppRedux";
import AppRoutes from "./core/AppRouter";

function App():JSX.Element {
  return (
    <Provider store={AppRedux}>
     A 
    </Provider>
  );
}

export default App;
