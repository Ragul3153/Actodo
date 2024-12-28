import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function Signup(props){

const navigate = useNavigate()
const [eusername,seteusername] = useState("")
const [epasssword,setepassword] = useState("")

const users = props.users
const setusers = props.setusers

const handleuser = (event) => {
    seteusername(event.target.value)
}

const handlepword = (event) => {
    setepassword(event.target.value)
}

const addelement = () => {
    setusers([...users,{username:eusername,password:epasssword}])
    navigate("/")
}

return(
    <div className="bg-black p-10">
        <div className="bg-white p-10 border rounded-md">
            <h1 className="text-3xl font-bold">Hey Hi</h1>
            <p>Sign up here :)</p>
            
            <div className="flex flex-col gap-2 my-2">
                <input type="text" className="border-black w-52 bg-transparent p-2 border rounded-sm" placeholder="Username" onChange={handleuser}></input>

                 <input type="text" className="border-black w-52 bg-transparent p-2 border rounded-sm" placeholder="Password" onChange={handlepword}></input>

                <input type="text" className="border-black w-52 bg-transparent p-2 border rounded-sm" placeholder="Confirm Password"></input>

                <button className="bg-[#FCA201] w-24 p-1 rounded-md font-bold" onClick={addelement}>
                    SignUp
                </button>

                <p>Already have an Account ? <Link to='/' className="hover:underline">Login</Link></p>
            </div>

        </div>

        
    </div>
)

}

export default Signup