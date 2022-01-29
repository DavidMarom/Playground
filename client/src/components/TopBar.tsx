import React, { useContext } from "react";
import { UserContext } from "../userContext";

export const TopBar = () => {
  const { value } = useContext(UserContext);

  return (
    <div className="top-bar">
      <h1>{value}</h1>
      <div>aaa</div>
    </div>
  );
};
