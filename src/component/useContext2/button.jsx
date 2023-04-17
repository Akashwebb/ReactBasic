import { Create } from "./create";
import { useContext } from "react";
const Button=()=>{
    const value3=useContext(Create)
    const handler=()=>{
         if(value3.color=="light"){
            value3.newcolor("dark")
            console.log(value3.color)
         }else{
            value3.newcolor("light")
            console.log(value3.color)
         }
    }
    return(
        <div>
            <button onClick={handler}>change</button>
        </div>
    )
}
export default Button;