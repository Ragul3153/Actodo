import Addtodo from "./Addtodo"
import TodoList from "./TodoList"

function Todocomponents(){

return(
    <div>
        <div className="flex gap-5 flex-wrap">
            <Addtodo/>
            <TodoList/>
        </div>
    </div>
)

}

export default Todocomponents