import React, { useContext, useEffect } from "react";
import { PageContext } from "../Context";

export const Page1 = () => {
  const { value, setValue } = useContext(PageContext);

  useEffect(() => {
    setValue("page1");
  });

  return (
    <>
      <h1>{value}</h1>
      <div>Page 1</div>
    </>
  );
};
