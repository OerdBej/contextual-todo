import React from "react";
import { useState, useEffect, createContext } from "react";

export const DataContext = createContext();

const DataProvider = (props) => {
  const [todo, setTodo] = useState([
    { name: "cooking", complete: false },
    { name: "reading", complete: false },
    { name: "working", complete: true },
  ]);
  return (
    <DataContext.Provider value={[todo, setTodo]}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataProvider;
