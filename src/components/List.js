import React from "react";

const List = () => {
  return (
    <ul>
      <li>
        <label htmlFor=''>
          <input type='checkbox' id='' />
          Cooking to do
        </label>
        <button>Edit</button>
      </li>
      <li>
        <label htmlFor=''>
          <input type='checkbox' id='' />
          Cooking to do
        </label>
        <button disabled>Edit</button>
      </li>
    </ul>
  );
};

export default List;
