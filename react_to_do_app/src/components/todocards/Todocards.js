import "./Todocards.css"
const Todocards = ({todo}) =>{
  return(
    <div>
      <h4 className={todo.complete?"strike":""}>{todo.task}</h4>
    </div>
  )
}
export default Todocards;