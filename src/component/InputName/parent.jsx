import { useState } from "react";
import SubHeading from "./welcome";
const World = ()=>{
    const[name,setname]=useState("")
    return (
        <div>
             <input onChange={(event)=>{setname(event.target.value)}} />
             <SubHeading na={name} />
        </div>
       
        
    )
}
export default World;