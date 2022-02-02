import React, { useState } from "react";
import "./assets/style/global.scss";
import { SideBar } from "./components/SideBar";
import { Routes, Route } from "react-router-dom";

import { Lobby } from "./components/Lobby";
import { Home } from "./components/Home";
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
            </Routes>
          </div>
        </div>
      </div>
    </PageContext.Provider>
  );
};
