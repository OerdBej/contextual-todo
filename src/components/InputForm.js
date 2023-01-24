import React from "react";
import { DataContext } from "./DataProvider";
import { useState, useContext } from "react";

const InputForm = () => {
  const [todo, setTodo] = useContext(DataContext);
  const [todoName, setTodoName] = useState("reading");

  const addTodo = (e) => {
    e.preventDefault();
    setTodo([...todo], { name: todoName, complete: false });
  };

  return (
    <form autoComplete='off' onSubmit={addTodo}>
      <input
        type='text'
        name='todo'
        id='todo'
        required
        placeholder='Need to be done'
        value={todoName}
        onChange={(e) => setTodoName(e.target.value.toLocaleLowerCase())}
      />
      <button type='submit'>Create</button>
    </form>
  );
};

export default InputForm;
