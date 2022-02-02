import { useContext, useEffect } from "react";
import { PageContext } from "../Context";
import { Link } from "react-router-dom";

export const SideBar = () => {
  // const msg = useContext(PageContext);
  const { value } = useContext(PageContext);

  return (
    value ?
      <div className="side-bar">
        <h1>LOGO</h1>

        <div className={value === "home" ? "menu-item-active" : "menu-item-no-active"} >
          <Link to="/home">Home</Link>
        </div>

        <div className={value === "debounce" ? "menu-item-active" : "menu-item-no-active"} >
          <Link to="/debounce">Debounce</Link>
        </div>
        <p>Sidebar needs design</p>
      </div>

      :
      <p>loading</p>
  )
};
