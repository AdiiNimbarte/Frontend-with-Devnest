import React  ,{useState} from "react";

function Button(){
    
    const[count,setCount]=useState(0);
const increaseCount =()=>{
    setCount(count+1);
   // console.log("Clicked");
};
 return(
     <div className="BUTTON">
    <h1>{count}</h1>
  <button onClick={increaseCount}>Click Me</button>
  </div>
 );
}
export default Button;