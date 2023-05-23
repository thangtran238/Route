import React from "react";
import Navbar from "./route/navbar";
import Home from "./route/home";
import About from "./route/about";
import Topic from "./route/topic";

export const Routes = [
  {
    path: "/",
    exact: true,
    main: () => <Home />,
  },
  {
    path: "/topic",
    exact: false,
    main: () => <Topic />,
  },
  {
    path: "/about",
    exact: false,
    main: () => <About />,
  },
];
