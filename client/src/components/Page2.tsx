import React, { useContext, useEffect } from "react";
import { PageContext } from "../Context";

export const Page2 = () => {
  const { value, setValue } = useContext(PageContext);

  useEffect(() => {
    setValue("page2");
  });

  return (
    <>
      <h1>{value}</h1>
      <div>Page 2</div>
    </>
  );
};
