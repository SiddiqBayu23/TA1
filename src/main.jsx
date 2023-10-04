import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";
import { ComplaintProvider } from "./context/ComplaintContext.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Provider from "./context/BannerContext.jsx";
import { ArticleProvider } from "./context/ArticlesContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <BrowserRouter>
    <AuthProvider>
      <ComplaintProvider>
        <Provider>
        <ArticleProvider>
        <App />
        </ArticleProvider>
        </Provider>
      </ComplaintProvider>
    </AuthProvider>
  </BrowserRouter>
  // </React.StrictMode>,
);
