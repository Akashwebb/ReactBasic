// todo

// import { useState } from "react";

// const Practice=()=>{
//      const[count,setcount]=useState(13)
//      const[add,setadd]=useState("")
//      const[data,setdata]=useState([])
//      const [change,setchange]=useState(false)
//      const[edit,setedit]=useState("")
//      const handle=()=>{
//          setcount(count+1)
//          setdata([...data,{item:add,index:count}])
//          setadd("")
//      }
//      const dele=(value)=>{
//         let newdata=[]
//         for(let i=0;i<data.length;i++){
//            if(data[i].index!==value.index){
//             newdata.push(data[i])
//            }
//         }
//         setdata(newdata)
//      }

//      const editing=(value)=>{
//         setchange(true)
//         setadd(value.item)
//          setedit(value.index)
         
//      }
//      const update=()=>{
//         let newdata=[]  
//        for(let i=0;i<data.length;i++){
//           if(data[i].index===edit){
//              let b={...data[i],item:add}
//              newdata.push(b)
//           }else{
//             newdata.push(data[i])
//           }
//        }
//         setdata(newdata)
//         setchange(false)
//         setadd("")
//      }

//     return(
//         <div>
//             <input onChange={(e)=>{setadd(e.target.value)}} value={add} />
//             {!change ?<button onClick={handle}>add</button> :   <button onClick={update}>update</button>}
           
//             <table>
//                 <thead>
//                     <tr>
//                         <th>item name</th>
//                     </tr>
//                 </thead>
//                 {data.map((value,key)=>{
//                     return(
//                     <tr key={key}>
//                        <td>{value.item}</td>
//                        <button onClick={()=>{dele(value)}}>delete</button>
//                        <button onClick={()=>editing(value)}>edit</button>
//                     </tr>
//                     )
//                 })}
//             </table>
//         </div>
//     )
// }
// export default Practice;