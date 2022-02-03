import React, { useContext, useEffect } from "react";
import { PageContext } from "../Context";

export const Lobby: React.FC = () => {
  const { value, setValue } = useContext(PageContext);

  useEffect(() => {
    setValue("lobby");

  });

  return (
    <>
      <p>{value}</p>
      <h1>Hello all you boys and girls...</h1>
      <p></p>
    </>
  );
};
