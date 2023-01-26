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

const SideFilter = (props) => {
  const [showDiv, setShowDiv] = useState(CardData);
  const [toggler, setToggler] = useState("");

  const uniqueNames = [];

  const uniqueCardData = CardData.filter((elem) => {
    const isDuplicate = uniqueNames.includes(elem.brand);

    if (isDuplicate) {
      uniqueNames.push(elem.itemDescription);
      return true;
    }
    return false;
  });

  console.log(uniqueCardData);
  const toggle = (id) => {
    setShowDiv(
      CardData.map((item) => {
        if (item.id === id) {
          if (item.isActive) {
            // console.log(item);
            return (item.isActive = false);
          } else {
            // console.log(item);
            return (item.isActive = true);
          }
        }
      })
    );
  };
  return (
    <>
      <div className="app"></div>
      <div className=" container-side-filter-outer">
        <div className="">
          <div className="side-filter-inner">
            {CardData.map((test, key) => {
              // console.log(key);
              return (
                <div className="filtru-smecher" key={key}>
                  <div className="filter filter-default">
                    {props.itemDescription &&
                      props.itemDescription.map((children, index) => {
                        <Link
                          to="#"
                          className="filter-head"
                          onClick={() => toggle(test.id)}
                        ></Link>;

                        // console.log(children);
                        return (
                          <div className="filter-body p-2" key={index}>
                            {Object.keys(children).filter((key) => {
                              return (
                                <a href="/" className="filter-item" key={key}>
                                  {key}
                                </a>
                              );
                            })}
                          </div>
                        );
                      })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default SideFilter;
