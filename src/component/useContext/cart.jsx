import { useContext } from "react";
import { Creat } from "./createContext";

const Cart=()=>{
    const value1=useContext(Creat)
    const final=()=>{
        const finalList=[]
        const newlist=[]
       value1.cart.map((value)=>{
        if(newlist[value.name]){
            newlist[value.name]++
        }else{
            newlist[value.name]=1
                }
       })
       for(let x in newlist){
        finalList.push(
            <div>
                {x}:{newlist[x]}
            </div>
        )
       }
       return finalList;
     }
     final()
    return(
        <div >
           cart : {value1.cart.length}
           {final()}
        </div>
    )
}
export default Cart;