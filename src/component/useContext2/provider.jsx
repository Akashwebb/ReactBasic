import { Create } from "./create";
import Child1 from "./child1";
import Child2 from "./child2";
import Button from "./button";

import "./aa.css"
import { useState } from "react";


const Provider=()=>{
    const[clr,setclr]=useState("light")
    return (
        <div>
            <Create.Provider value={{color:clr, newcolor: setclr}}>
                <Button/>
                <Child1/>
                 <Child2/>
            </Create.Provider>
        </div>
    )
}
export default Provider;