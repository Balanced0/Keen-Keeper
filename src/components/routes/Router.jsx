import React from "react";
import { createBrowserRouter } from "react-router";
import Homepage from "../homepage/Homepage";
import App from "../../App";
import FriendDetails from "../friendDetails/FriendDetails";
import Timeline from "../timeline/Timeline";
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
        path: "/timeline",
        element: <Timeline></Timeline>,
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
