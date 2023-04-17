import React from "react";
import { useCallback , useMemo} from "react";
import { useState } from "react";
import Optimization from "./Optimization";
import FunctionOpti from "./useCallback";
const Parent=()=>{
    const[add,setAdd]=useState("")
    const[list,setlist]=useState([])
    const[heading,setheading]=useState("i am old")
   const addHandler=()=>{
      
         setlist([...list,{itemname : add}])
         setAdd("")
        }

      // const handleHeading=()=>{
      //   return heading
      // }
        
      const handleHeading = useCallback(()=>{
         return heading;
      },[heading])
      
   return(
        <div>
             <input  onChange={(event)=>{setAdd(event.target.value)}} value={add} />
             <button onClick={addHandler} >Add</button> 
             <button onClick={()=>{setheading("I AM NEW")}}>USECallback</button>
            <table>
                <thead>
                    <tr>
                        <th>item name</th>
                    </tr>
                </thead>
                <tbody>
                            {list.map((value,index)=>{
                             return(
                                   <tr key={index}>
                                       <td>{value.itemname}</td>
                                   </tr>
                    ) })}
                </tbody>
            </table>
            {/* <Optimization /> */}
            <FunctionOpti head= {handleHeading}/>
        </div>
           
    )
}
export default Parent;