import { useState } from "react";
import Operation from "./Operation/Operation";

const Calculator=()=>{
    const[calculated,setcal]=useState(0)
    const[input1,setinput1]=useState(0)
    const[input2,setinput2]=useState(0)
    return(
        <div>
           <input type="number" onChange={(event)=>setinput1(event.target.value)} />
           <input  type="number" onChange={(event)=>setinput2(event.target.value)}/>
           <div>{calculated}</div>
           <Operation value1={input1} value2={input2} final={setcal} />
            
        </div>
    )
}
export default Calculator;