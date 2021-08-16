import React from 'react'
import './login.css'
function Home ({login,setLogin}){
    return(
      <div className="home">
      <h1>Home</h1>
      <h2>If not logged in can't access Profile & Dashboard</h2>
      {login? <button onClick={()=>setLogin(false)} >Logout</button> :<button onClick={()=>setLogin(true)}>Login</button>} 
      </div>
    );
}

export default Home;