// import { forEach } from "lodash";
import React, { useContext, useEffect, useState } from "react";
import { PageContext } from "../Context";
import { httpService } from '../services/httpService';

interface listItem {
  id: Number;
  col2: Number;
  col3: Number;
}


export const Sql = () => {
  const { value, setValue } = useContext(PageContext);
  const [data, setData] = useState<listItem[]>([]);

  useEffect(() => { setValue("sql"); });

  useEffect(() => {
    httpService.get('user').then(res => {
      setData(res.data);
    })
  }, [])




  return (
    <>
      <h1>{value}</h1>

      {data.map((e: any, idx: number) => <p key={idx}>{e.col2}</p>)}


    </>
  );
};
