function Todoitem(props){

return(
    <div classname="flex justify-between">
    <p>{props.index+1}.{props.activity}</p>
    <button className="text-red-600">Delete</button>
    </div>
)

}

export default Todoitem