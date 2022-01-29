import React from "react";
import "./assets/style/global.scss";
import { SideBar } from "./components/SideBar";

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

function App() {
  return (
    <div className="overall-layout">
      <SideBar />

      <div className="right-side">
        <div className="top-bar">Top-bar</div>
        <div className="content">
          <Routes>
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
