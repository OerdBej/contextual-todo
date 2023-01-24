import React from "react";
import InputForm from "./components/InputForm";
import List from "./components/List";
import Footer from "./components/Footer";
import DataProvider from "./components/DataProvider";
const App = () => {
  return (
    <DataProvider>
      <div className='App'>
        <h1>ToDo list</h1>
        <InputForm />
        <List />
        <Footer />
      </div>
    </DataProvider>
  );
};

export default App;
