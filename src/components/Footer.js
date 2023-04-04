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

  const newTodosComplete = () => {
    return todos.filter((todo) => todo.complete === false);
  };

  const deleteTodo = () => {
    setTodos(newTodosComplete());
    setCheckAll(false);
  };

  return (
    <>
      {todos.length === 0 ? (
        <h2>Congratulations you have nothing to do 😂</h2>
      ) : (
        <div className='row'>
          <label htmlFor='all'>
            <input
              type='checkbox'
              name='all'
              id='all'
              onChange={handleCheckAll}
              checked={checkAll}
            />
            ALL
          </label>
          <p>
            {/* this function will un display the length of the input todo */}
            You have {todos.filter((todo) => todo.complete === false).length} to
            do
          </p>
          <button id='delete' onClick={deleteTodo}>
            Delete
          </button>
        </div>
      )}
    </>
  );
};

export default Footer;
