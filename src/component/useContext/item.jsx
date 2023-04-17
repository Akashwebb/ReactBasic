import { useContext } from "react";
import { Creat } from "./createContext";
const Item=()=>{
    const items =[{name:"item1"},{name:"item2"},{name:"item3"},{name:"item4"},{name:"item5"}]
   
    const value2=useContext(Creat)
    const handler=(value)=>{
         value2.newcart([...value2.cart,value])
    }
    return(
        <div >
             {items.map((value,key)=>{
               return(
                <div >
                      {value.name}
                      <button onClick={(()=>{handler(value)})}>{value.name}</button>
                       
                    </div>
               )
             })}
        </div>
    )
}
export default Item;