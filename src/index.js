import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AppContextProvider from "./ContextAPI/AppContext";
import { CartProvider } from './ContextAPI/CartContext'

ReactDOM.render(
  <React.StrictMode>
    <AppContextProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </AppContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
