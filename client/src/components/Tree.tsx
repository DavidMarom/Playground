import React, { useContext, useEffect, useState } from "react";
import { PageContext } from "../Context";
import SortableTree from '@nosferatu500/react-sortable-tree';

export const Tree = () => {

  const [treeData, setTreeData] = useState<any>(
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
