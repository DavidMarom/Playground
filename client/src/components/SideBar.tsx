import { useContext, useEffect } from "react";
import { PageContext } from "../Context";
import { Link } from "react-router-dom";

export const SideBar = () => {
  // const msg = useContext(PageContext);
  const { value } = useContext(PageContext);

  return value ? (
    <div className="side-bar">
      <div className="logo"><h1>LOGO</h1></div>

      <Link to="/">
        <div className={value === "lobby" ? "menu-item-active" : "menu-item-no-active"}>Lobby</div>
      </Link>

      <Link to="/home">
        <div className={value === "home" ? "menu-item-active" : "menu-item-no-active"}>Home</div>
      </Link>

      <Link to="/debounce">
        <div className={value === "debounce" ? "menu-item-active" : "menu-item-no-active"}>Debounce</div>
      </Link>



      <p>Sidebar needs design</p>
    </div >
  ) : (
    <p>loading</p>
  );
};
