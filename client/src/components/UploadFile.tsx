import React, { useContext, useEffect } from "react";
import { PageContext } from "../Context";
import { httpService } from '../services/httpService';

export const UploadFile = () => {
  const { value, setValue } = useContext(PageContext);

  useEffect(() => { setValue("upload file"); });

  const handleClick = () => {
    console.log('click');

    httpService.post('file', { b: '222' }).then(res => {
      console.log(res.data);
    })

  }


  return (
    <>
      <h1>{value}</h1>
      <button onClick={handleClick}>Click</button>
    </>
  );
};
