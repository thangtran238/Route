import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Routes } from "../route";

export default function Navbar() {
  const showContentMenus = (Routes) => {
    var result = null;
    if (Routes.length > 0) {
      result = Routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    }
    return <Switch>{result}</Switch>;
  };

  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/topic" className="nav-link">
                Topics
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
          </ul>
        </nav>
        <hr />
      </div>
      <div>
        <div>{showContentMenus(Routes)}</div>
      </div>
    </Router>

  );
}
