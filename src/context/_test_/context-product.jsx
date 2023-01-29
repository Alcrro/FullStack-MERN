import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const ProductContext = createContext();

export const FetchDataProvider = ({ children }) => {
  const [fetchProductData, setFetchProductData] = useState(null);

  //Fetch data Cards
  useEffect(() => {
    axios.get("http://localhost:5000/CardData").then((res) => {
      setFetchProductData(res.data);
    });
  }, []);
  return <ProductContext.Provider value={{ fetchProductData }}>{children}</ProductContext.Provider>;
};

export default FetchDataProvider;
