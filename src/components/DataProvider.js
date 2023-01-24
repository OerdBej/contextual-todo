import React from "react";
import { useState, createContext } from "react";

export const DataContext = createContext();

const DataProvider = (props) => {
  const [todo, setTodo] = useState([]);
  return (
    <DataContext.Provider value={[todo, setTodo]}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataProvider;
