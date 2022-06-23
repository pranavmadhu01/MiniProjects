import "./App.css";
import Header from "./components/header/Header";
import Todolist from "./components/todolist/Todolist";
import data from "./data.json";
import { useState } from "react";

function App() {
  const [toDoList, seTotDoList] = useState(data);
  return (
    <div className="App">
      <Header />
      <Todolist toDoList = {toDoList}/>
    </div>
  );
}

export default App;
