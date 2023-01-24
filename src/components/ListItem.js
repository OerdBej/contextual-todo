import React from "react";

const ListItem = () => {
  return (
    <div>
      <li>
        <label htmlFor=''>
          <input type='checkbox' id='' />
          Cooking to do
        </label>
        <button>Edit</button>
      </li>
    </div>
  );
};

export default ListItem;
