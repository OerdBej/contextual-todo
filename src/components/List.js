import React, { useContext } from "react";
import ListItem from "./ListItem";
import { DataContext } from "./DataProvider";

const List = () => {
  const [todo, setTodo] = useContext(DataContext);

  const switchComplete = (id) => {
    alert(id);
  };

  return (
    <ul>
      {todo.map((todo, index) => (
        <ListItem
          todo={todo}
          key={index}
          id={index}
          checkComplete={switchComplete}
        />
      ))}
    </ul>
  );
};

export default List;
