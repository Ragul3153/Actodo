import Todoitem from "./Todoitem"
import { useState } from "react"

function TodoList(){

const [activityArr,setactivityArr] = useState([{id:1,activity:"Go for a Walk"},{id:2,activity:"Go to School"},{id:3,activity:"Go to Park"}])

return(
    <div>
         <div className="bg-violet-300 p-3 rounded-md flex-grow">
            <h1 className="text-2xl font-medium">Today's Activity</h1>
            <p>You haven't added any activity yet</p>
            {
                activityArr.map(function(item,index){
                return <Todoitem activity={item.activity} index={index}/>
                })
            }
        </div>
    </div>
)

}

export default TodoList