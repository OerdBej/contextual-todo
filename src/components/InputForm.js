import React from "react";

const InputForm = () => {
  return (
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
  );
};

export default InputForm;
