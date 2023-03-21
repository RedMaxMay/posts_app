import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { PostsProvider } from "./components/Context/PostsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <PostsProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </PostsProvider>
);
