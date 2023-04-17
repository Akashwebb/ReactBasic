import { useContext } from "react";
import { Create } from "./create";
const Child1=()=>{
    const value1=useContext(Create)
   const handle1=()=>{
    value1.newcolor("red")
   }
    return (
        <div className={value1.color} onClick={handle1} >
            child1
        </div>
    )
}
export default Child1;