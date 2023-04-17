import Cart from "./cart";
import { Creat } from "./createContext";
import Item from "./item";
import { useState } from "react";
const Provider=()=>{
    const[cart,setcart]=useState([])
    return(
        <div>
            <Creat.Provider value={{cart:cart , newcart:setcart}}>
            <Cart/>
            <Item/>
               
            </Creat.Provider>
        </div>
    )
}
export default Provider;