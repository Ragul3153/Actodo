function Addtodo(){

return(
    <div>
         <div className="flex flex-col gap-3">
        <h1 className="text-2xl font-medium">Manage Activites</h1>
        <div>
        <input type="text" className="border border-black bg-transparent p-1" placeholder="Next Activity?"></input>
        <button className="bg-black text-white p-1 border border-black">Add</button>
        </div>
    </div>
    </div>
)

}

export default Addtodo