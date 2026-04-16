import React from "react";
import { createBrowserRouter } from "react-router";
import Homepage from "../homepage/Homepage";
import App from "../../App";
import FriendDetails from "../friendDetails/FriendDetails";
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
        path: "/details/:id",
        loader: ()=> fetch("/friends.json"),
        element: <FriendDetails></FriendDetails>,
      },
      {
        path: "*",
        element: <h1>Error 404</h1>,
      },
    ],
  },
]);

export default Router;
