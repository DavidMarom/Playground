import React, { useContext, useEffect } from "react";
import { PageContext } from "../Context";

interface node {
  data: Number;
  next: any;
}

class listNode {
  data: Number;
  next: any;

  constructor(data: Number, next: any) {
    this.data = data;
    this.next = next;

  };


}

const renderList = (node: node): String => {
  let plot = '' + node.data;
  let pointer = node;

  while (pointer.next != null) {
    pointer = pointer.next;
    plot += pointer.data


  }
  return plot;
}


export const ListPage = () => {
  const { setValue } = useContext(PageContext);
  let myList = new listNode(2, new listNode(3, null));

  useEffect(() => { setValue("list-page"); });

  return (
    <>
      <p>{renderList(myList)}</p>
    </>
  );
};
