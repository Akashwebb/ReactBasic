import React from "react";
import { useState } from "react";

const Todo=()=>{
    const[add,setAdd]=useState("")
    const[list,setlist]=useState([])
    const[count,setcount]=useState(0)
    const[edit,setedit]=useState(false)
    const[editIndex,setEditIndex]=useState(0)
    const addHandler=()=>{
        setcount(count+1)
         setlist([...list,{itemname : add,id:count}])
         setAdd("")
        
    }
    const delHandle=(delitem)=>{
        
        const newlist = list.filter((data)=>{
            return data.id !== delitem.id
           
        });
        setlist(newlist);
    }
    const editHandle=(edititem)=>{
        setAdd(edititem.itemname)
        setedit(true)
        setEditIndex(edititem.id)   // to set id in editIndex coz edititem gives value and work within function only
       }
    const updateHandler=()=>{       // to make id work , we set present id in *editIndex
           let newlist=list
           newlist[editIndex]={itemname:add,id:editIndex}
           setlist(newlist)
           setedit(false)
       }

    return(
        <div>
            
            <input  onChange={(event)=>{setAdd(event.target.value)}} value={add} />
           
            {edit? <button onClick={updateHandler} > ok </button> :  <button onClick={addHandler} >Add</button> }
            <table>
                <thead>
                    <tr>
                        <th>item name</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((value,index)=>{
                        return(
                            <tr key={index}>
                               <td>{value.itemname}</td>
                               <button onClick={()=>{delHandle(value)}} >delete</button>
                               <button onClick={()=>{editHandle(value)}}>edit</button>
                            </tr>
                        )
                       
                    })}
                </tbody>
            </table>
           
        </div>
           
    )
}
export default Todo;