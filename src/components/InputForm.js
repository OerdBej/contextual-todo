import React from "react";
import { DataContext } from "./DataProvider";
import { useState, useContext, useRef, useEffect } from "react";

const InputForm = () => {
  const [todo, setTodo] = useContext(DataContext);
  const [todoName, setTodoName] = useState("");
  const todoInput = useRef();

  const addTodo = (e) => {
    e.preventDefault();
    setTodo([...todo, { name: todoName, complete: false }]);
    setTodoName("");
  };

  useEffect(() => {
    todoInput.current.focus();
  }, []);
  return (
    <form autoComplete='off' onSubmit={addTodo}>
      <input
        type='text'
        name='todo'
        id='todo'
        ref={todoInput}
        required
        placeholder='Need to be done'
        value={todoName}
        // getting the user input and setting up the state to hold the data
        onChange={(e) => setTodoName(e.target.value.toLocaleLowerCase())}
      />
      <button type='submit<s'>Create</button>
    </form>
  );
};

export default InputForm;
