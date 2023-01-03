import React from "react";
import BreadcrmpTree from "../../components/ui/Breadcrumb";
import Tree from "../../components/ui/Tree/Tree";
import "../../components/ui/Tree/Tree.css";

const BreadCrumbStructureFolder = [
  {
    key: 0,
    label: "src",
    icon: "fa-solid fa-folder",
    documentType: "folder",
    children: [
      {
        key: 0 - 1,
        label: "components",
        icon: "fa-solid fa-folder",
        documentType: "folder",

        children: [
          {
            key: 0 - 1 - 1,
            label: "UI",
            icon: "fa-solid fa-folder",
            documentType: "folder",
            children: [
              {
                key: 0 - 1 - 1 - 1,
                label: "Children 1",
                icon: "fa-solid fa-folder",
                documentType: "folder",
                children: [
                  {
                    key: 0 - 1 - 1 - 1 - 2,
                    label: "Children 2",
                    icon: "fa-solid fa-file",
                    documentType: "file",
                    page: "<Avatar />",
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

const TestSmecher = ({ data }) => {
  return (
    <>
      {data.map((itemE) => (
        <TestMaiSmecher test2={itemE} key={itemE.label} />
      ))}
    </>
  );
};

const TestMaiSmecher = ({ test2 }) => {
  return <>{test2.label}</>;
};

const TreeList = () => {
  return (
    <>
      <div className="container">
        <div className="text-center">
          <h2>Tree Visualization Component</h2>
        </div>
        <div className="">
          <ol className="">
            <BreadcrmpTree data={BreadCrumbStructureFolder} />
          </ol>
        </div>

        <div className="test-smecher">
          <TestSmecher data={BreadCrumbStructureFolder} />
        </div>

        <div className="">
          <div className="">
            <Tree data={dataStructureFolder} />
          </div>
        </div>
      </div>
    </>
  );
};

export default TreeList;
