import React from "react";
import BreadcrmBTree from "./ui/Breadcrumb";
import Tree from "./ui/Tree/Tree";
import "../assets/styles/Tree.css";

const BreadCrumbStructureFolder = [
  {
    key: 0,
    label: "src",
    icon: "fa-solid fa-folder",
    documentType: "folder",
    page: "src",
    children: [
      {
        key: 0 - 1,
        label: "components",
        icon: "fa-solid fa-folder",
        documentType: "folder",
        page: "components",
        children: [
          {
            key: 0 - 1 - 1,
            label: "UI",
            icon: "fa-solid fa-folder",
            documentType: "folder",
            page: "UI",
            children: [
              {
                key: 0 - 1 - 1 - 1,
                label: "Children 1",
                icon: "fa-solid fa-folder",
                documentType: "folder",
                page: "Children 1",
                children: [
                  {
                    key: 0 - 1 - 1 - 1 - 2,
                    label: "Children 2",
                    icon: "fa-solid fa-file",
                    documentType: "file",
                    page: "Children 2",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

const dataStructureFolder = [
  {
    key: "0",
    label: "src",
    icon: "fa fa-folder",
    title: "Documents Folder",
    children: [
      {
        key: "0-0",
        label: "assets",
        icon: "fa fa-folder",
        title: "Documents Folder",
        children: [
          {
            key: "0-1-1",
            label: "Fontawesome",
            icon: "fa fa-folder",
            title: "Documents Folder",
            children: [
              {
                key: "0-1-1-1",
                label: "css",
                icon: "fa fa-folder",
                title: "Documents Folder",
              },
              {
                key: "0-1-1-2",
                label: "wefonts",
                icon: "fa fa-folder",
                title: "Documents Folder",
              },
            ],
          },
          {
            key: "0-1-2",
            label: "Images",
            icon: "fa fa-folder",
            title: "Documents Folder",
          },
          {
            key: "0-1-3",
            label: "Style",
            icon: "fa fa-folder",
            title: "Documents Folder",
            children: [
              {
                key: "0-1-3-1",
                label: "_test_",
                icon: "fa fa-folder",
                title: "Documents Folder",
              },
            ],
          },
          {
            key: "0-1-4",
            label: "README.md",
            icon: "fa fa-file",
            title: "Documents Folder",
            url: "/src/assets/components/readme",
          },
        ],
      },
      {
        key: "0-1",
        label: "components",
        icon: "fa fa-folder",
        title: "Documents Folder",
        children: [
          {
            key: "0-1-1",
            label: "form",
            icon: "fa fa-folder",
            title: "Documents Folder",
          },
          {
            key: "0-1-2",
            label: "UI",
            icon: "fa fa-folder",
            title: "Documents Folder",
          },
        ],
      },
      {
        key: "0-2",
        label: "context",
        icon: "fa fa-folder",
        title: "Documents Folder",
        children: [
          {
            key: "0-1-1",
            label: "form",
            icon: "fa fa-folder",
            title: "Documents Folder",
          },
          {
            key: "0-1-2",
            label: "UI",
            icon: "fa fa-folder",
            title: "Documents Folder",
          },
        ],
      },
    ],
  },
];

const TreeList = () => {
  return (
    <>
      <div className="container">
        <div className="text-center">
          <h2>Tree Visualization Component</h2>
        </div>

        <div className="">
          <div className="">
            <Tree data={dataStructureFolder} />
          </div>
        </div>
      </div>
      <div className="text-center">
        <h2>Breadcrumb</h2>
      </div>
      <div className="container">
        <ol className="">
          <BreadcrmBTree data={BreadCrumbStructureFolder} />
        </ol>
      </div>
    </>
  );
};

export default TreeList;
