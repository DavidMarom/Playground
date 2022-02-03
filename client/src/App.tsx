import React, { useState } from "react";
import "./assets/style/global.scss";
import '@nosferatu500/react-sortable-tree/style.css';

import { SideBar } from "./components/SideBar";
import { Routes, Route } from "react-router-dom";

import { Lobby } from "./components/Lobby";
import { Home } from "./components/Home";
import { Tree } from "./components/Tree";
import { Page1 } from "./components/Page1";
import { Page2 } from "./components/Page2";
import { Page3 } from "./components/Page3";
import { Debounce } from "./components/Debounce";
import { TopBar } from "./components/TopBar";

import { PageContext } from "./Context";

export const App: React.FC = () => {
  const [value, setValue] = useState("lobby");
  // const providerValue = useMemo(() => ({ value, setValue }), [value, setValue]);

  return (
    <PageContext.Provider value={{ value, setValue }}>
      <div className="overall-layout">
        <SideBar />

        <div className="right-side">
          <TopBar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Lobby />} />
              <Route path="/home" element={<Home />} />
              <Route path="/debounce" element={<Debounce />} />
              <Route path="/tree" element={<Tree />} />
              <Route path="/page1" element={<Page1 />} />
              <Route path="/page2" element={<Page2 />} />
              <Route path="/page3" element={<Page3 />} />
            </Routes>
          </div>
        </div>
      </div>
    </PageContext.Provider>
  );
};
