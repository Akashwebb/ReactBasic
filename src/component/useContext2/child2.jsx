import { useContext } from "react";
import { Create } from "./create";
const Child2=()=>{
    const value2=useContext(Create)
    
    return (
        <div className={value2.color}>
               child2
        </div>
    )
}
export default Child2;