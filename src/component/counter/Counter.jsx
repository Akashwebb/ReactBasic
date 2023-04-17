import { useState } from "react"
let Counter= () =>{
    const [count,countval]=useState(0)   //count is value AND countval is function that updating that value
   let increment=()=>{
       //countval(count+1)           // update your count value
       //countval(count+1)           // count will not increment by 2 , coz useState is asynchronous function
       countval((prevCount)=>{
           return prevCount+1
       })                              // for doing it , we neeed to use callback function

       countval((prevCount)=>{ 
        return prevCount+1
    })      
   }
   let decrement=()=>{
        countval(count-1)   
    }
    
    return(
        <div>
             <button onClick={increment} >+</button>
             <div>{count}</div>
             <button onClick={decrement}>-</button>
             <button onClick={()=>countval(count*2)}> multiply </button>
        </div>
    )
}
export default Counter;