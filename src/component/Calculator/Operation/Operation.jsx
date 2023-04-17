const Operation=(props)=>{
    const Add=()=>{
        props.final(parseInt(props.value1) + parseInt(props.value2))
    }
    const Multiply=()=>{
        props.final(parseInt(props.value1) * parseInt(props.value2))
    }
    return(
        <div>
             <button onClick={Add}>Add</button>
             <button onClick={Multiply}>Multiply</button>
        </div>
    )
    
}
export default Operation;