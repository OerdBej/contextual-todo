import React from "react";

const ListItem = ({ todo, id, checkComplete }) => {
  return (
    <li>
      <label htmlFor={id} className={todo.complete ? "active" : ""}>
        <input
          type='checkbox'
          id={id}
          checked={todo.complete}
          onChange={() => checkComplete(id)}
        />
        {todo.name}
      </label>
      <button>Edit</button>
    </li>
  );
};

export default ListItem;
