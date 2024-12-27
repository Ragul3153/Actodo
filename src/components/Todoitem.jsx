function Todoitem(props){

const activityArr = props.activityArr

const setactivityArr = props.setactivityArr

const handledelete = (deleteid) => {
    var temp = activityArr.filter(function(item){
        if(item.id == deleteid){
            return false
        }
        else{
            return true
        }
    })

    setactivityArr(temp)
}

return(
    <div className="flex justify-between">
    <p>{props.index+1}.{props.activity}</p>
    <button className="text-red-600" onClick={()=>{handledelete(props.id)}}>Delete</button>
    </div>
)

}

export default Todoitem