import React from "react";
import InputForm from "./components/InputForm";
import List from "./components/List";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div className='App'>
      <h1>ToDo list</h1>
      <InputForm />
      <List />
      <Footer />
    </div>
  );
};

export default App;
