import React, { createContext, useState, useEffect } from "react";

const FetchCardDataContext = createContext();

export const FetchCardDataProvider = ({ children }) => {
  const [fetchData, setFetchData] = useState([]);

  //Fetch Data Cards
  const fetchCardDataT = async () => {
    const response = await fetch("http://localhost:5000/CardData");
    const data = await response.json();
    setFetchData(data);
  };
  return (
    <FetchCardDataContext.Provider
      value={{
        fetchData,
      }}
    >
      {children}
    </FetchCardDataContext.Provider>
  );
};

export default FetchCardDataContext;
