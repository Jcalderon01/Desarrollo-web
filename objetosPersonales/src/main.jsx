import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Layout from "./pages/Layout";
import Registras from "./pages/Registras";

const rutas = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "registrar",
        element: <Registras />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={rutas} />
  </React.StrictMode>
);
