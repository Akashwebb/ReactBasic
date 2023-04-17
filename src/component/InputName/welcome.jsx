import { useState } from "react"

const SubHeading=(props)=>{
    const[aa,setaa]=useState(<div></div>)
    const printing=()=>{
    setaa(<div style={{color:"brown"}}> {<h1>Welcome {props.na} to 10x</h1>} </div>)
        }
    return (
        <>
        {aa}
        <div>
        <button onClick={printing}>click me</button></div>
        </>
        )
}
export default SubHeading;