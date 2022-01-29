import { useContext } from "react";
import { UserContext } from "../userContext";

import {
   Link
} from "react-router-dom";

export const SideBar = () => {
  const msg = useContext(UserContext);

  return (
    <div className="side-bar">
      <h1>LOGO</h1>

      <div className={msg === 0 ? "menu-item-active" : "menu-item-no-active"}>
        <Link to="/home">Home</Link>
      </div>
      <div className={msg === 1 ? "menu-item-active" : "menu-item-no-active"}>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
};
