import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// Routes
import ErrorPage from "./routes/Error";
import Home from "./routes/Home";
import Users from "./routes/Users";
import SingleUser from "./routes/SingleUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "Users",
        element: <Outlet />,
        children: [
          { index: true, element: <Users /> },
          { path: ":userId", element: <SingleUser /> },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
