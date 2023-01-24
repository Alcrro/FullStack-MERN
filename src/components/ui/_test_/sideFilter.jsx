import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../../assets/styles/_test_/sideFilter.css";
import { CardData } from "../../../products";

const filterData = [
  {
    id: 1,
    filterName: "Tip procesor",
    isActive: true,
    children: [
      {
        id: 11,
        childrenName: "Am bani 1",
      },
      {
        id: 12,
        childrenName: "Am bani 2",
      },
    ],
  },
  {
    id: 2,
    filterName: "Oferte de nerefuzat",
    isActive: true,
    children: [
      {
        id: 111,
        childrenName: "Trotinete 1",
      },
      {
        id: 112,
        childrenName: "Trotinete 2",
      },
    ],
  },
  {
    id: 3,
    filterName: "Cele mai bune ",
    isActive: true,
    children: [
      {
        id: 111,
        childrenName: "Trotinete 1",
      },
      {
        id: 112,
        childrenName: "Trotinete 2",
      },
    ],
  },
];

const getKeys = (data) => {
  let arr = [];
  if (data) {
    Object.keys(CardData).map((key) => {
      arr = Object.keys(CardData[key].data);
    });
  }
  return arr;
};

console.log(
  Object.keys(filterData).map((test, key) => {
    return test;
  })
);

const SideFilter = () => {
  const [showDiv, setShowDiv] = useState(CardData);
  const [toggler, setToggler] = useState("");

  const toggle = (id) => {
    setShowDiv(
      CardData.map((item) => {
        if (item.id === id) {
          if (item.isActive) {
            console.log(item);
            return (item.isActive = false);
          } else {
            console.log(item);
            return (item.isActive = true);
          }
        }
      })
    );
  };

  return (
    <div className=" container-side-filter-outer">
      <div className="">
        <div className="side-filter-inner">
          {Object.keys(filterData[1]).map((test, key) => {
            return (
              <div className="filtru-smecher" key={key}>
                <div className="filter filter-default">
                  <Link to="#" className="filter-head" onClick={() => toggle(test.id)}>
                    {test}
                  </Link>
                  {test.isActive ? (
                    <div className="filter-body p-2">
                      {test.children.map((children, index) => {
                        return (
                          <a href="/" className="filter-item" key={index}>
                            {children.childrenName}
                          </a>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SideFilter;
