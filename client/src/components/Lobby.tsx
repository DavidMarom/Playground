import React, { useContext, useEffect } from "react";
import { PageContext } from "../Context";

export const Lobby: React.FC = () => {
  const { value, setValue } = useContext(PageContext);

  useEffect(() => {
    setValue("lobby");

  });

  return (
    <>
      <img src="https://res.cloudinary.com/dojmo7vcc/image/upload/v1644058242/Nadir_bqcvmn.png" width="200px" />

      <h1>Hi!</h1>
      <p>Welcome. If you wish to join our project as a collaborator, let us know on our Discord server: <span>
        <a href="https://discord.gg/g5fStjuE3N" target="_blank">Click Here</a></span>
      </p>
    </>
  );
};
