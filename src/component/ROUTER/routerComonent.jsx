import { Link, Outlet } from "react-router-dom";
const ComponentIndex=()=>{
   return(
    <div> 
        <ul>
            <li> <Link to="/counter">Counter</Link>  </li>
            <li> <Link to="/calculator"> Calcularor</Link> </li>
            <li> <Link to="/form" >Form</Link> </li>
            <li> <Link to="/age">Age</Link> </li>
        </ul>

    </div>
   ) 
}
export default ComponentIndex;