import React, { useContext, useEffect } from "react";
import { PageContext } from "../Context";

export const Home = () => {
  const { value, setValue } = useContext(PageContext);

  useEffect(() => {
    setValue("home");
  });

  return (
    <>
      <h1>{value}</h1>
      <div>Home</div>
    </>
  );
};
