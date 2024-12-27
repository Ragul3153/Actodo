import { act, useState } from "react"

function Addtodo(props){

const [activity,setactivity] = useState("")

const activityArr = props.activityArr

const setactivityArr = props.setactivityArr

const handlechange = (event) => {
    setactivity(event.target.value)
}

const handleadd = () =>{
    setactivityArr([...activityArr,{id:activityArr.length+1,activity:activity}])
}

return(
    <div>
        <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-medium">Manage Activites</h1>
        <div>
            <input value={activity} onChange={handlechange} type="text" className="border border-black bg-transparent p-1" placeholder="Next Activity?"></input>
            <button className="bg-black text-white p-1 border border-black" onClick={handleadd}>Add</button>
        </div>
    </div>
    </div>
)

}

export default Addtodo