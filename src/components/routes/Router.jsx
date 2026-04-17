import React from "react";
import { createBrowserRouter } from "react-router";
import Homepage from "../homepage/Homepage";
import App from "../../App";
import FriendDetails from "../friendDetails/FriendDetails";
import Timeline from "../timeline/Timeline";
import NotFound from "../notFound/NotFound";
import Stats from "../stats/Stats";
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
        path: "/stats",
        element: <Stats></Stats>
      },
      {
        path: "/details/:id",
        loader: ()=> fetch("/friends.json"),
        element: <FriendDetails></FriendDetails>,
      },
      {
        path: "*",
        element: <NotFound></NotFound>,
      },
    ],
  },
]);

export default Router;
