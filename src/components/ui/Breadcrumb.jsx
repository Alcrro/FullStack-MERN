import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import Avatar from "../../assets/images/apple.svg";

const BreadcrmpTree = ({ data }) => {
  return (
    <>
      {data.map((breadTree) => (
        <BreadCrumbNode breadNode={breadTree} key={breadTree.key} />
      ))}
    </>
  );
};

const BreadCrumbNode = ({ breadNode }) => {
  const [childVisible, setChildVisibility] = useState(false, {
    documentType: "folder",
  });
  const hasChild = breadNode.children ? true : false;
  const docType = breadNode.documentType.valueOf();
  const hasPage = breadNode.page ? true : false;

  const CheckFiles = () => {
    if (docType === "folder") {
      return (
        <i
          className={`${childVisible && hasChild ? "fa-regular fa-folder" : "fa-solid fa-folder"}`}
        ></i>
      );
    } else {
      return (
        <>
          <i className="fa-solid fa-file"></i>
        </>
      );
    }
  };

  return (
    <>
      <div
        className="d-inline text-dark"
        role="button"
        onClick={(e) => setChildVisibility((v) => !v)}
      >
        <div className={`d-inline`}>
          <CheckFiles />
        </div>

        <div className="d-inline "> / {breadNode.label} </div>
      </div>

      <div className="d-inline">
        {hasChild && childVisible && <BreadcrmpTree data={breadNode.children} />}
      </div>
    </>
  );
};

export default BreadcrmpTree;
