import "./App.css";
import data from "./data.json";
import Header from "./components/header/Header";
import Todolist from "./components/todolist/Todolist";
import { useState } from "react";

function App() {
  const [toDoList, seTotDoList] = useState(data);
  return (
    <div className="App">
      <Header />
      <Todolist toDoList={toDoList}/>
    </div>
  );
}

export default App;
