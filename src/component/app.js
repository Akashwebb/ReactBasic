// import '../styles/App.css';
// import {BrowserRouter,Routes,Route, Outlet,useNavigate,Link} from "react-router-dom"

// import Hello from "./Hello/hello";
//   import World from "./InputName/parent";

// import Home from "./Items/Items_home";
// import Counter from "./counter/Counter";

// import Calculator from "./Calculator/Calculator";

// import Iterator from "./Iteration/Unorder";
// import IterationPractise2 from "./Iteration/table";

//  import Main from "./Welcome/Main";
// import Form from "./FORM/form";
// import UseRef from './useRef/useref';

// import Reducer from './useReducer/useReducer';

//  import Fetching from './useEffect/fetching';
// import Todo from './TODO/Todo';



//import MemoValue from './useMemo/useMemo';
// import PredictAge from './useEffect/Api';

//import Practice from './PRACTICE/practice2';


// import Provider from './useContext2/provider';
import Provider from "./useContext2/provider";

// import Parent from './useMemo/parent';

// import ComponentIndex from './ROUTER/routerComonent';

//import Flip from './FLIP/flip';
const App =()=>{
   
    return(
        <div>
            {/* <Hello/> 
            <World/> */}
            {/* <World/> */}

            {/* <Home /> */}
           
           {/* <Counter/> */}
           {/* <Calculator/> */}

           {/* <Iterator/>
           <IterationPractise2/> */}
           {/* <Main/>
            */}

            {/* <Form/> */}

            {/* <Reducer/> */}

            {/* <Fetching/> */}
            {/* <Todo/> */}
            {/* <UseRef/> */}

            {/* <Practice/> */}
           {/* <Provider/> */}
           {/* <MemoValue/> */}
          {/* <Provider/> */}
          <Provider/>
            {/* <Parent/> */}

{/* <BrowserRouter>
   <Routes>
        <Route path="/" element={<ComponentIndex/>} />
        <Route path="counter" element={<Counter/>} />
        <Route path="calculator" element={<Calculator/>} />
        <Route path="form" element={<Form/>} />
        <Route path="age" element={<><Link to="/age/predictAge">PREDICT</Link> <Outlet/> </>}>
            <Route path="predictAge"  element={<PredictAge/>} />
        </Route>
        <Route path="*" element={<div><h1>Page not found 404 !!!</h1></div>} />
    </Routes>
</BrowserRouter> */}

{/* <Flip/> */}
        </div>
    )
}
export default App;