import React, { useState, useEffect } from 'react';

import dataBase from './api/dataBase';
import DataBaseBookList from './component/DataBaseBookList';
export default function MyBooks({ route }) {
  const [resultArray, setResultArray] = useState([]);
  if (route.params) {
    dataBase
      .get('bookApp')
      .then((data) => {
        setResultArray(data.data);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    dataBase
      .get('bookApp')
      .then((data) => {
        setResultArray(data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return <DataBaseBookList result={resultArray} />;
}
