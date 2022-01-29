import React, { useContext, useEffect } from "react";
import { UserContext } from "../userContext";

export const Home = () => {
  const { value, setValue } = useContext(UserContext);

  useEffect(() => {
    return () => {
      console.log("Home loaded");
      setValue(1);
    };
  });

  return (
    <>
      <h1>{value}</h1>
      <div>Home</div>
    </>
  );
};
