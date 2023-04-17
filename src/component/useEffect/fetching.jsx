import axios from "axios"
import { useEffect } from "react";
import { useState } from "react"
import loader from "./loaderr.gif"
 const Fetching=()=>{
// fetch("https://www.boredapi.com/api/activity").then((res)=>{
//    console.log(res)   // we will not get data directly as its returning another promise and dataStream
//      return res.json()            // data exchanging
// }).then((data)=>{
//     console.log(data)              // return data in form of object
//     console.log(data.key)
// }).catch((err)=>{
//     console.log("error")
// }).finally(()=>{

// })

const[coin,setcoin]=useState(0);
const[arr,setarr]=useState([]);

useEffect(()=>{getCoin()},[])

const getCoin=()=>{
    axios.get("https://api.coindesk.com/v1/bpi/currentprice.json").then((res)=>{
        // console.log(res)
        console.log(res.data.bpi)        // directly return data ,  no promise chain
        setarr(Object.values(res.data.bpi))
        console.log(arr)
 }).catch((err)=>{
      console.log("error block")
 }).finally(()=>{
 
  });
 }
 

return (
        <div>
              <div>Buy and sell bit coin</div>
              <button onClick={()=>{setcoin(coin+1)}} >+</button>
              <button onClick={()=>{setcoin(coin-1)}} >-</button>
              <div>Quantity:{coin}</div>
              <table>
                <thead>
                    <tr>
                        <th>Code</th>
                        <th>Description</th>
                        <th>Rate</th>
                    </tr>
                </thead>
                { <tbody>
                    {!arr.length && < img src={loader} alt="aa" />}
                      {arr.length && arr.map((value,index)=>{
                        return( 
                            <tr key={index}>
                            <td>{value.code}</td>
                            <td>{value.description}</td>
                            <td>{value.rate}</td>
                        </tr>
                        )
                        
                      })}
                </tbody> }
              </table>
        </div>
    )
}
export default Fetching;