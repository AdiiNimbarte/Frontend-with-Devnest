import React from 'react'
import './login.css'
import { NavLink } from 'react-router-dom'
function Assemble({login,setLogin}) {
    console.log(login)
    return (
        <div className="assemble">
             <NavLink  to='/home'>Home</NavLink>
             <NavLink  to='/about'>About</NavLink>
             <NavLink  to={`${!login ?"/home" :"/profile"}`} onClick={()=>login?setLogin(true):setLogin(false)}>Profile</NavLink>
             <NavLink  to={`${!login ?"/home" :"/dashboard"}`}>Dashboard</NavLink>
        </div>
    )
}

export default Assemble;