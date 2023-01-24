import React from "react";

const App = () => {
  return (
    <div className='App'>
      <h1>ToDo list</h1>

      <form autoComplete='off'>
        <input
          type='text'
          name='todos'
          id='todos'
          required
          placeholder='Need to be done'
        />
        <button type='submit'>Create</button>
      </form>
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
      <div className='row'>
        <label htmlFor='all'>
          <input type='checkbox' name='all' id='all' />
          ALL
        </label>
        <p>You have 0 to do</p>
        <button id='delete'>Delete</button>
      </div>
    </div>
  );
};

export default App;
