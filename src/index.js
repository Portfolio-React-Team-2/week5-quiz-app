import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { DataProvider } from "./components/DataContext";
import GlobalStyle from "./components/styles/GlobalStyle";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DataProvider>
      <GlobalStyle />
      <App />
    </DataProvider>
  </React.StrictMode>
);
