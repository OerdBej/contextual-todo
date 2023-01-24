import React from "react";

const ListItem = (props) => {
  return (
    <div>
      <li>
        <label htmlFor={props.id}>
          <input type='checkbox' id={props.id} />
          {props.todo.name}
        </label>
        <button>Edit</button>
      </li>
    </div>
  );
};

export default ListItem;
