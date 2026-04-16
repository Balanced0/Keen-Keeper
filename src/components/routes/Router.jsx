import React from "react";
import { createBrowserRouter } from "react-router";
import Homepage from "../homepage/Homepage";
import App from "../../App";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        loader: ()=> fetch("/friends.json"),
        element: <Homepage></Homepage>,
      },
      {
        path: "*",
        element: <h1>Error 404</h1>,
      },
    ],
  },
]);

export default Router;
