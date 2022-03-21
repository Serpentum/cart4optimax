import './index.css';
import '../src/assets/style.css'
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Layout from "./layout";
import {Provider} from "react-redux";
import {store} from "./store";
import CartPage from "./pages/CartPage";


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Layout>
        <CartPage />
      </Layout>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
