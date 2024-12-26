function Card(props){

return(
    <>
        <div style={{backgroundColor:props.bgcolor}} className="p-5 text-center text-2xl border rounded-md flex-grow">
             <h1 className="font-bold">{props.title}</h1>
             <p>{props.subtitle}</p>
        </div>
    </>
)

}

export default Card