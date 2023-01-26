import React, { useEffect } from "react";
import { useState, createContext } from "react";
import { json } from "react-router-dom";

export const DataContext = createContext();

const DataProvider = (props) => {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    const todoStore = JSON.parse(localStorage.getItem("todoStore"));
    if (todoStore) setTodo(todoStore);
  }, []);

  useEffect(() => {
    localStorage.setItem("todoStore", JSON.stringify(todo));
  }, [todo]);

  return (
    <DataContext.Provider value={[todo, setTodo]}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataProvider;
