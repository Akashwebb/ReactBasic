// two way to create GLOBALE DATA OR GLOBAL STATE ::
// 1. useReducer hook
// 2. context API

import { useState } from "react";
import { useReducer } from "react";

// useReducer expect two parameter ::  FUNCTION that update value  AND   the INITIAL VALUE
//                                      and return value  AND   function to update that value

const Reducer=()=>{
    
    const func=(value,action)=>{
          switch(action.type){
            case "increment":
                return value+1
            case "decrement":
                    return value-1
            case "increment-by":
                        return value + action.inputval

          }
          }
          const initial=5;
     
    const[counter,dispatch]=useReducer(func,initial)
    const[inputVal,setinputVal]=useState("")
    return(
        <div>
            <button onClick={()=>{dispatch({type:"increment"})}} >+</button>
            <div>{counter}</div>
            <button onClick={()=>{dispatch({type:"decrement"})}}>-</button>
            <input onChange={(e)=>setinputVal(e.target.value)} />
            <button onClick={()=>{dispatch({type:"increment-by",inputval:parseInt(inputVal)})}}>increment-by</button>
        </div>
    )
}
export default Reducer;