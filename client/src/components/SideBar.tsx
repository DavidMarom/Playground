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

      <Link to="/tree">
        <div className={value === "tree" ? "menu-item-active" : "menu-item-no-active"}>Tree</div>
      </Link>

      <Link to="/snake">
        <div className={value === "snake" ? "menu-item-active" : "menu-item-no-active"}>Snake</div>
      </Link>

      <Link to="/sql">
        <div className={value === "sql" ? "menu-item-active" : "menu-item-no-active"}>SQL</div>
      </Link>

      <Link to="/uploadfile">
        <div className={value === "uploadfiles" ? "menu-item-active" : "menu-item-no-active"}>Upload File</div>
      </Link>




    </div >
  ) : (
    <p>loading</p>
  );
};
