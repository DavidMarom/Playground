import React, { useContext, useEffect, useState } from "react";
import { PageContext } from "../Context";
import SortableTree from '@nosferatu500/react-sortable-tree';

export const Tree = () => {

  interface treeNode {
    title: string;
    children: any;
  }

  const [treeData, setTreeData] = useState<treeNode[]>(
    [
      { title: 'Chicken', children: [{ title: 'Egg' }] },
      { title: 'Fish', children: [{ title: 'fingerline' }] },
    ]
  )

  const { setValue } = useContext(PageContext);

  // This is needed for the css of the sidebar
  useEffect(() => { setValue("tree") });

  return (
    <>
      <div className="tree-container">
        <SortableTree
          treeData={treeData}
          onChange={() => setTreeData(treeData)}
        />
      </div>
    </>
  );
};
