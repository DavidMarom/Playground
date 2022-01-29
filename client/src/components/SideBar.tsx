import React, { useState } from "react";

import {
  LinkProps,
  Routes,
  Route,
  Outlet,
  Link,
  useMatch,
  useResolvedPath,
} from "react-router-dom";

// function CustomLink({ children, to, ...props }: LinkProps) {
//     let resolved = useResolvedPath(to);
//     let match = useMatch({ path: resolved.pathname, end: true });

//     return (
//       <div>
//         <Link
//           style={{
//             textDecoration: match ? "none" : "none",
//             color: match ? "#ffffff" : "#ff0000",
//             // background-color: match "#132112" : "#234456",
//             padding: match ? "20px" : "20px"

//           }}
//           to={to}
//           {...props}
//         >
//           {children}
//         </Link>
//       </div>
//     );
//   }

export const SideBar = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="side-bar">
      <h1>LOGO</h1>

      <div
        className={active === 0 ? "menu-item-active" : "menu-item-no-active"}
      >
        <Link to="/home">Home</Link>
      </div>
      <div
        className={active === 1 ? "menu-item-active" : "menu-item-no-active"}
      >
        <Link to="/about">About</Link>
      </div>
    </div>
  );
};
