import { useState, useEffect, useMemo } from "react";

const MemoValue = ()=> {
    let num = 0;
    const expensive = (num)=> {
        console.log("Calculating.......")
        for(let i=0;i<1000000000;i++) {
            num+=1
        }
        console.log("Calculated!")
        return num
    }

    const [count, setCount] = useState(0);
    const [test, setTest] = useState(0);
   
    useMemo(()=> {expensive(count)}, [count]);
    
     //  expensive() 
    return (
        <>
        <button onClick={()=> {setCount(count + 1)}}>+</button> 
                    {/* this will   CALL   expensive function on value change   */}
        
        <button onClick={()=> {setTest(test+1)}}>Re-render</button>
                    {/* this will  NOT CALL   expensive function on value change   */}
        <div>{count}</div>
        <div>{test}</div>
        </>
    )
}
export default MemoValue;