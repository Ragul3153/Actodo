import Header from "./components/Header"
import Card from "./components/card"
import Todocomponents from "./components/Todocomponents"
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Landing from "./pages/Landing";
import { useState } from "react";


function App()
{
    const [users,setusers] = useState([{username:"ragul",password:"123"}])

    return(
    <div>
        <BrowserRouter>
        <Routes>
        <Route path='/' element={<Logins users={users} setusers={setusers}/>}></Route>
        <Route path='/signup' element={<Signup users={users} setusers={setusers}/>}></Route>
        <Route path='/landing' element={<Landing/>}></Route>
        </Routes>
        </BrowserRouter>
    </div>
    )
}

root.render(<App/>)