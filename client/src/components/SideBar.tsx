import { useContext } from "react";
import { PageContext } from "../Context";

import { Link } from "react-router-dom";

export const SideBar = () => {
  const msg = useContext(PageContext);

  return (
    <div className="side-bar">
      <h1>LOGO</h1>

      <div
        className={msg === "home" ? "menu-item-active" : "menu-item-no-active"}
      >
        <Link to="/home">Home</Link>
      </div>
      <div
        className={msg === "about" ? "menu-item-active" : "menu-item-no-active"}
      >
        <Link to="/about">About</Link>
      </div>
    </div>
  );
};
