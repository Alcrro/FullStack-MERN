import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../../assets/styles/_test_/sideFilter.css";
import { CardData } from "../../../products";
import { ProductContext } from "../../../context/_test_/context-product";

const SideFilter = (props) => {
  const itemsse = CardData.map((item) => {
    const itemDesc = item.itemDescription.map((itemCat) => {
      const itemKey = Object.keys(itemCat).filter((key) => {
        return key;
      });
      return itemKey;
    });
    return itemDesc;
  });
  // console.log(itemsse);
  const test = itemsse.toString((test) => {
    return test;
  });
  // console.log(test);
  const splites = test.split(",");
  // console.log(splites);

  const inSfarsitUnique = [...new Set(splites)];
  // console.log(inSfarsitUnique);

  return (
    <>
      <ProductContext.Provider>
        <div className="app">{}</div>
        <div className=" container-side-filter-outer">
          <div className="">
            <div className="sidebar-container-body">
              <div className="filter filter-default">
                {inSfarsitUnique.map((key) => {
                  return (
                    <div className="filtru-smecher mb-1" key={key}>
                      <Link to="#" className="filter-head">
                        {key}
                        {test.itemDescription &&
                          props.itemDescription.map((children, index) => {
                            return (
                              <div className="filter-body p-2" key={index}>
                                <li href="/" className="filter-item fs-6">
                                  {children[key]}
                                </li>
                              </div>
                            );
                          })}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </ProductContext.Provider>
    </>
  );
};

export default SideFilter;
