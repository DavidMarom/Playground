import React, { useContext, useEffect } from "react";
import { PageContext } from "../Context";

export const Lobby: React.FC = () => {
  const { value, setValue } = useContext(PageContext);

  useEffect(() => {
    setValue("lobby");

    return () => { };
  });

  return (
    <>
      <h1>{value}</h1>
      <div>Lobby</div>
    </>
  );
};
