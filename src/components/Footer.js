import React from "react";
import { useContext, useState } from "react";
import { DataContext } from "./DataProvider";

const Footer = () => {
  const [checkAll, setCheckAll] = useState(false);
  const [todos, setTodos] = useContext(DataContext);

  const handleCheckAll = () => {
    const newTodos = [...todos];
    newTodos.forEach((todo) => {
      todo.complete = !checkAll;
    });
    setTodos(newTodos);
    setCheckAll(!checkAll);
  };

  return (
    <div className='row'>
      <label htmlFor='all'>
        <input type='checkbox' name='all' id='all' onClick={handleCheckAll} />
        ALL
      </label>
      <p>You have 0 to do</p>
      <button id='delete'>Delete</button>
    </div>
  );
};

export default Footer;
