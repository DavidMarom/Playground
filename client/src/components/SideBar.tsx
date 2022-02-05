import { useContext } from "react";
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

      <Link to="/page1">
        <div className={value === "page1" ? "menu-item-active" : "menu-item-no-active"}>page01</div>
      </Link>

      <Link to="/page2">
        <div className={value === "page2" ? "menu-item-active" : "menu-item-no-active"}>page02</div>
      </Link>

      <Link to="/list">
        <div className={value === "list-page" ? "menu-item-active" : "menu-item-no-active"}>List</div>
      </Link>




    </div >
  ) : (
    <p>loading</p>
  );
};
