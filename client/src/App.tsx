import React, { useState } from "react";
import "./assets/style/global.scss";
import { SideBar } from "./components/SideBar";

import { Routes, Route } from "react-router-dom";

import { Home } from "./components/Home";
import { About } from "./components/About";
import { TopBar } from "./components/TopBar";
import { UserContext } from "./userContext";

function App() {
  const [value, setValue] = useState(7);
  // const providerValue = useMemo(() => ({ value, setValue }), [value, setValue]);

  return (
    <>
      <UserContext.Provider value={{ value, setValue }}>
        <div className="overall-layout">
          <SideBar />

          <div className="right-side">
            <TopBar />
            <div className="content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </div>
          </div>
        </div>
      </UserContext.Provider>
    </>
  );
}

export default App;
