import Todoitem from "./Todoitem"
import { useState } from "react"

function TodoList(props){

return(
         <div className="bg-violet-300 p-3 rounded-md flex-grow">
            <h1 className="text-2xl font-medium">Today's Activity</h1>
            <p>You haven't added any activity yet</p>
            {
                props.activityArr.map(function(item,index){
                return <Todoitem activity={item.activity} id={item.id} index={index} activityArr={props.activityArr} setactivityArr={props.setactivityArr}/>
                })
            }
        </div>
)

}

export default TodoList