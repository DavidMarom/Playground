import React from "react";
import "./assets/style/global.scss";

import {
  LinkProps,
  Routes,
  Route,
  Outlet,
  Link,
  useMatch,
  useResolvedPath,
} from "react-router-dom";

import { Home } from "./components/Home";
import { About } from "./components/About";

function CustomLink({ children, to, ...props }: LinkProps) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        style={{ textDecoration: match ? "underline" : "none" }}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
}

function App() {
  return (
    <div className="overall-layout">
      <div className="side-bar">
        <div>
          <CustomLink to="/">Home</CustomLink>
        </div>
        <div>
          <CustomLink to="/about">About</CustomLink>
        </div>
      </div>

      <div className="right-side">
        <div className="top-bar">Top-bar</div>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
          </Routes>
        </div>

      </div>
    </div>
  );
}

export default App;
