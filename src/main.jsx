import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./bootstrap.min.css";
import App from "./App";
import ErrorPage from "./error-page";
import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "first-page",
        element: <FirstPage />,
      },
      {
        path: "second-page",
        element: <SecondPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
