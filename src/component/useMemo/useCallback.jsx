import React from "react";
const FunctionOpti=(props)=>{
    console.log("i am function")
    return (
        <div>
           {props.head()}
        </div>
    )
}
export default FunctionOpti;

// export default React.memo(Optimization);