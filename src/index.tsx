import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { App } from "./app/App";
import { HomePage } from "./pages/home/home-page";
import { UserPage } from "./pages/user/user-page";

import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { Provider } from "react-redux";
// import { setupStore } from "./app/store/store";
// import { store } from "./app/store/store";

import store from "./app/store/store";

// const store = setupStore();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/user/:userId" element={<UserPage />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);

reportWebVitals();
