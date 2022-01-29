import React, { useState } from "react";
import "./assets/style/global.scss";
import { SideBar } from "./components/SideBar";
import { Routes, Route } from "react-router-dom";

import { Home } from "./components/Home";
import { About } from "./components/About";
import { Lobby } from "./components/Lobby";
import { TopBar } from "./components/TopBar";
import { PageContext } from "./Context";

export const App = () => {
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
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </div>
      </div>
    </PageContext.Provider>
  );
};
