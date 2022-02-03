import React, { useContext, useEffect } from "react";
import { PageContext } from "../Context";

export const Page3 = () => {
  const { value, setValue } = useContext(PageContext);

  useEffect(() => {
    setValue("page3");
  });

  return (
    <>
      <h1>{value}</h1>
      <div>Page 3</div>
    </>
  );
};
