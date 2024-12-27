import { useState } from "react"
import Addtodo from "./Addtodo"
import TodoList from "./TodoList"

function Todocomponents(){

const [activityArr,setactivityArr] = useState([{id:1,activity:"Go for a Walk"},{id:2,activity:"Go to School"},{id:3,activity:"Go to Park"}])

return(
    <div>
        <div className="flex gap-5 flex-wrap">
            <Addtodo activityArr={activityArr} setactivityArr={setactivityArr}/>
            <TodoList activityArr={activityArr} setactivityArr={setactivityArr}/>
        </div>
    </div>
)

}

export default Todocomponents