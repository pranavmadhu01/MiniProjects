import "./Todolist.css";
import Todocards from "../todocards/Todocards";
const Todolist = ({toDoList}) => {
  return (
    <div className="full-todos-wrapper">
      {toDoList.map(todo=>{
        return(
          <Todocards todo = {todo} />
        )
      })}
      
    </div>
  );
};


export default Todolist;
