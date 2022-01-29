import React, { useContext } from "react";
import { PageContext } from "../Context";

export const TopBar = () => {
  const { value } = useContext(PageContext);

 
  return (
    <div className="top-bar">
      <h1>{value}</h1>
    </div>
  );
};
