import React from 'react';
import { useContext, useState, useEffect } from 'react';
import Card from '../components/ui/Card';
import FetchCardDataContext from '../context/FetchCardDataContext';

function FetchCardData() {
  const { fetchData } = useContext(FetchCardDataContext);

  if (!fetchData || fetchData.length === 0) {
    return <p>No Items Yet</p>;
  }

  return fetchData.map((item) => <Card key={item.id} item={item} />);
}

export default FetchCardData;
