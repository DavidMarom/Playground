import React, { useContext, useEffect } from "react";
import { UserContext } from "../userContext";

export const About = () => {
  const { value, setValue } = useContext(UserContext);

  useEffect(() => {
    return () => {
      console.log("About loaded");
      setValue(2);
    };
  });

  return (
    <>
      <h1>{value}</h1>
      <div>About</div>
    </>
  );
};
