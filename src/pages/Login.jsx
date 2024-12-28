import { use, useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function Login(props){

const navigate = useNavigate()
const [eusername,seteusername] = useState("")
const [epasssword,setepassword] = useState("")
const [ruser,setruser] = useState(true)

const users = props.users
const setusers = props.setusers

const checkuser = () => {

    var userfound = false

    users.forEach(function(item)
    {
        if(item.username === eusername && item.password === epasssword){
            console.log("Login Successfull")
            userfound = true
            navigate("/landing",{state:{user:eusername}})
        }
    })

    if(userfound===false)
    {
        console.log("Login Failed")
        setruser(false)
    }

}

const handleuser = (event) => {
    seteusername(event.target.value)
}

const handlepword = (event) => {
    setepassword(event.target.value)
}

return(
     <div className="bg-black p-10">
        <div className="bg-white p-10 border rounded-md">
            <h1 className="text-3xl font-bold">Hey Hi</h1>
            {ruser? <p>I help you manage your activites after you login :)</p> : <p className="text-red-500">Please Sign Up Before you Login</p>}
            
            
            <div className="flex flex-col gap-2 my-2">
                <input type="text" className="border-black w-52 bg-transparent p-2 border rounded-sm" placeholder="Username" onChange={handleuser}></input>

                 <input type="text" className="border-black w-52 bg-transparent p-2 border rounded-sm" placeholder="Password" onChange={handlepword}></input>

                <button className="bg-[#8272DA] w-24 p-1 rounded-md font-bold" onClick={checkuser}>
                    Login
                </button>

                <p>Don't have an Account? <Link to='/signup' className="hover:underline">Signup</Link></p>
            </div>

        </div>

        
    </div>
)

}

export default Login