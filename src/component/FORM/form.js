import React, { useState } from "react";

const Form=()=>{
    let x=''
    const[display,setdisplay]=useState("")
    const[form,setform]=useState({name:"",email:"",gender:"",number:"",password:""})
    const[err,seterr]=useState({name:{isValid:true,message:""} , email:{isValid:true,message:""}, gender:{isValid:true,message:""},
                                   number:{isValid:true,message:""}, password:{isValid:true,message:""} })

  const isDisable=form.name.length && form.email.length && form.gender.length && form.number.length && form.password.length ;
      
            const displaying=(event)=>{
              event.preventDefault();  // it will not refresh the screen again and again on click on submit
              
              if(isDisable>0){
                alert("Congrats !! Your form is submitted")
                setform({name:"",email:"",gender:"",number:"",password:""})
                x=form.email.split("@")
               setdisplay(<h1>Hello {x[0]}</h1>)
              }
              else{
                alert("all fields are mandatory")
              }
             
            }
           
        const checkerr=(type)=>{
          switch(type){
            case "name":
                 const regExx=/[a-zA-Z]*[0-9]+[\s]?/
                 if(!regExx.test(form.name)){
                  seterr({...err,name:{isValid: false,message:"Name is not alphanumeric"}})
                }else{
              seterr({...err, name:{isValid:true,message:""}    })
              }
               break;

               case "email":
                const regExxx =/[a-z]@/
                if(!regExxx.test(form.email)){
                        seterr({...err,email:{isValid: false,message:"email must contain @"}})
                }else{
                    seterr({...err, email:{isValid:true,message:""}    })
                }
                  break;

               case "gender":
                 
               break;

               case "number":
                const regEx =/[0-9]/
                if(!regEx.test(form.number)){
                        seterr({...err,number:{isValid: false,message:"Phone Number must contain only numbers"}})
                }else{
                    seterr({...err, number:{isValid:true,message:""}    })
                }
               break;
              
               case "password":
                if(form.password.length<6){
                  seterr({...err,password:{isValid: false,message:"Password must contain atleast 6 letters"}})
                }else{
                  seterr({...err, password:{isValid:true,message:""}    })
                }
               break;
          }
       }

    return(
        <div id="main">
            <div><h1> VALIDATION FORM</h1> </div><br/>
            <form><br/>
               
            {!err.name.isValid ? <div style={{color:"red"}}>   {err.name.message}</div> : null}
            <label htmlFor="name" >Name: </label>
            <input  data-testid = 'name'  id="name" type="text"  onChange={(event)=>{setform({...form,name:event.target.value})}}
              onBlur={(event)=>{checkerr("name")}} value={form.name}    /> <br/><br/>
            
           
            {!err.email.isValid ? <div style={{color:"red"}}>   {err.email.message}</div> : null}
            <label htmlFor="email" >Email: </label>
            <input data-testid = 'email' id="email" type="email"  onChange={(event)=>{setform({...form,email:event.target.value})}}
              onBlur={(event)=>{checkerr("email")}} value={form.email}  /><br/><br/>
            
            
            {!err.gender.isValid ? <div style={{color:"red"}}>   {err.gender.message}</div> : null}
            <label data-testid = 'gender'htmlFor="gender" >choose gender: </label>
            <select  onChange={(event)=>{setform({...form,gender:event.target.value})}}
              onBlur={(event)=>{checkerr("gender")}} value={form.gender}>
                <option>Choose </option>
                <option value="male">male</option>
                <option  >female</option>
                <option value="female" >other</option>
            </select><br/><br/>
            
            
            {!err.number.isValid ? <div style={{color:"red"}}>   {err.number.message}</div> : null}
            <label htmlFor="phone" >Phone no: </label>
            <input data-testid = 'phoneNumber' id="phone" type="number"  onChange={(event)=>{setform({...form,number:event.target.value})}}
              onBlur={(event)=>{checkerr("number")}} value={form.number} /><br/><br/>
            
            
            {!err.password.isValid ? <div style={{color:"red"}}>   {err.password.message}</div> : null}
            <label htmlFor="password" >Password: </label>
            <input id="password" data-testid = 'password' type='password'  onChange={(event)=>{setform({...form,password:event.target.value})}}
              onBlur={(event)=>{checkerr("password")}} value={form.password} /><br/><br/>
            
            
            <button data-testid = 'submit' type="button" onClick={displaying}   >Submit</button>
            {display}
            
            </form>
        </div>
    )
}
export default Form;