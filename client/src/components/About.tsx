import React, { useContext, useEffect } from "react";
import { PageContext } from "../Context";

export const About = () => {
  const { value, setValue } = useContext(PageContext);

  useEffect(() => {
    setValue("about");
    return () => {};
  });

  return (
    <>
      <h1>{value}</h1>
      <div>About</div>
    </>
  );
};
