import React, { useContext } from "react";
import ListItem from "./ListItem";
import { DataContext } from "./DataProvider";

const List = () => {
  const [todo, setTodo] = useContext(DataContext);

  //adding the underline logic
  const switchComplete = (id) => {
    const newTodos = [...todo];
    newTodos.forEach((todo, index) => {
      if (index === id) {
        todo.complete = !todo.complete;
      }
    });
    setTodo(newTodos);
  };

  const handleEditTodos = (editvalue, id) => {
    const newTodo = [...todo];
    newTodo.forEach((todo, index) => {
      if (index === id) {
        todo.name = editvalue;
      }
    });
    setTodo(newTodo);
  };

  return (
    <ul>
      {todo.map((todo, index) => (
        <ListItem
          todo={todo}
          key={index}
          id={index}
          checkComplete={switchComplete}
          handleEditTodos={handleEditTodos}
        />
      ))}
    </ul>
  );
};

export default List;
