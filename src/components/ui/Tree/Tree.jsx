import React, { useEffect, useState } from "react";

const Tree = ({ data = [] }) => {
  return (
    <div className="container">
      <ul className="">
        {data.map((tree) => (
          <TreeNode node={tree} key={tree.key} />
        ))}
      </ul>
    </div>
  );
};

export const TreeNode = ({ node }) => {
  const [childVisible, setChildVisibility] = useState(false);

  const hasChild = node.children ? true : false;

  return (
    <>
      <li className="">
        <div className="d-inline" onClick={(e) => setChildVisibility((v) => !v)}>
          {hasChild && (
            <div className={`d-inline-block d-tree-toggler ${childVisible ? "active" : ""}`}>
              <i className="fa fa-caret-right"> </i>
            </div>
          )}
          <div className="col d-tree-head px-2 d-inline-block">
            <i
              className={`mr-1 ${childVisible && hasChild ? "fa-regular fa-folder" : node.icon}`}
            ></i>
            <span className="px-2">/ {node.label} </span>
          </div>
        </div>
        {hasChild && childVisible && (
          <div className="">
            <ul className="">
              <Tree data={node.children} />
            </ul>
          </div>
        )}
      </li>
    </>
  );
};

export default Tree;
