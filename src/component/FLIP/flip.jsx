import { useState } from "react";

const Flip=()=>{
    const[value,setvalue]=useState("MARCO")
    const[valid,setvalid]=useState(false)
    
    const marcoo=()=>{
        console.log("hh22")
      setvalue("MARCO")
      setvalid(false)
    }
    const poloo=()=>{
        console.log("hh")
         setvalue("POLO")
         setvalid(true)
    }

    return(
        <div>
            
          { valid ? <button onClick={marcoo}>Marco</button> : <button onClick={poloo}>Polo</button>}
          <div>{value}</div> 
        </div>
    )
}
export default Flip;