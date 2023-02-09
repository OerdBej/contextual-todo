import React from "react";

const ListItem = (props) => {
  return (
    <div>
      <li>
        <label htmlFor={props.id} className={todo.complete ? "active" : ""}>
          <input type='checkbox' id={props.id} checked={todo.complete} />
          onchange={() => props.checkComplete(id)} /}
          {props.todo.name}
        </label>
        <button>Edit</button>
      </li>
    </div>
  );
};

export default ListItem;
