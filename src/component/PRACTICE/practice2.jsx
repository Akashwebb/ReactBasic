

import { useState } from "react";
const Practice=()=>{
    const[form,setform]=useState({name:"",password:""})
    const[err,setErr]=useState({name:{isValid:true,message:""}, password:{isValid:true,message:""}})
    
       const checking=(type)=>{
       switch(type){
        case "name":
         const regEx=/[a-zA-Z]*[0-9]+[\s]?/
         if(!regEx.test(form.name)){
            setErr({...err,name:{isValid:false,message:"invalid"}})
         }else{
            setErr({...err,name:{isValid:true,message:""}})
         }
         break;
         case "password":
            if(form.password.length<6){
                setErr({...err,password:{isValid:false,message:"less"}})
            }else{
                setErr({...err,password:{isValid:true,message:"done all"}})
            }
              break;}
    }
    return(
        <div>

             {!err.name.isValid ? <div>{err.name.message}</div> : null }
             <label htmlFor="name">Name :</label>
             <input id="name" onChange={(event)=>{setform({...form,name:event.target.value})}} 
                onBlur={(event)=>{checking("name")}} value={form.name}/>     <br/><br/>
             
             {!err.password.isValid ? <div>{err.password.message}</div> : null }
             <label htmlFor="pass">Password :</label>
             <input id="pass" onChange={(event)=>{setform({...form,password:event.target.value})}} 
                onBlur={(event)=>{checking("password")}} value={form.password}/>     <br/><br/>
              <button>Submit</button>
             

        </div>
    )
}
export default Practice;

