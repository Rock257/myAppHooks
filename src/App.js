import { useEffect, useState } from "react";
import "./App.css";


// import Basic from './HooksInReact/Basic';
// import UseEffectHook from './HooksInReact/UseEffectHook';
// import ForStyle from './HooksInReact/ForStyle';
// import Bootstarp from './HooksInReact/Bootstrap';
// import HandleArray from './HooksInReact/HandleArray';
// import Test from './HooksInReact/Test';
// import  NestedArray from './HooksInReact/NestedArray';
// import ReuseCompo from './HooksInReact/ResuseCompo';
// import ReactFragments from './HooksInReact/ReactFragments';
// import LiftingStateUp from './Part2/LiftingStateUp';
// import PureCompo from '../src/Part2/PureCompo'
// import UseMemoHook from './Part2/UseMemoHook';
// import RefInClass from './Part2/RefInClass';
// import UseReHook from "./Part2/UseReHook";
// import ControlComponentm from "./Part2/ControlComponentm";
// import UncontrolComponent from "./Part2/UncontrolComponent";

// import MyCounterApp from "./Part2/HOC/MyCounterApp";
// import HOCTwo from "./Part2/HOC/HOCTwo";


// import Nav from "./Part2/Routeing/ExampleTwo/Nav";
// import Error404 from "./Part2/Routeing/ExampleTwo/Error404";
// import MainRoute from "./Part2/Routeing/MainRoute";
// import DynRouting from "./Part2/Routeing/DynamicRouting/DynRouting";

// import ApiApp from "./Part2/CallAndGetMethodApi/ApiApp";
// import MethodPost from "./Part2/Postman/MethodPost";
import NoteState from "./Part2/Context/appfile/NoteState";


function App() {
  const [status, setStatus] = useState("Active");

  // parent to child and vice versa
  const [userName, setUserName] = useState("Rocky");

  function ParentToChild(Nam) {
    alert(Nam);
  }

  function showCount(value) {
    alert(value);
  }
  // useEffect(()=>{
  //   console.warn('useEffect as props')
  // },[status])

  // for ReuseCompo

  const user = [
    { name: "Rahul", email: "sonit862t@gmail.com", contact: 464494946 },
    { name: "Sia", email: "siai862t@gmail.com", contact: 974549462 },
    { name: "Shruti", email: "Shrutui2t@gmail.com", contact: 6634719494 },
    { name: "Tripti", email: "stripti2@gmail.com", contact: 696494946 },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <div className="hooks">
          {/* <Basic/> */}

          <br />

          {/* <div className="UseEffectHook">
            <UseEffectHook state = {status}/>
            <br />
        <button onClick={()=>setStatus('Deactive')}>Click to update the status </button>
          </div> */}

          <div className="styleInReact">
            <div className="main">{/* <ForStyle/> */}</div>
            {/* <Bootstarp/> */}
          </div>

          <div className="arrList">{/* <HandleArray/> */}</div>

          <div className="arrList">{/* <Test/> */}</div>
          <div className="arrList">{/* <NestedArray/> */}</div>

          <div className="arrList">
            {/* lets render user first */}
            {/* <h1>Lets  Try Reusablity Of The React Copmonent  </h1> */}
            {user.map((item) => {
              return <>{/* <ReuseCompo data ={item}/>  */}</>;
            })}
          </div>

          <div className="arrList">{/* <ReactFragments/> */}</div>

          <div className="arrList">
            {/* <LiftingStateUp name = {userName}  setUserName = {setUserName} msg ={ParentToChild} val ={showCount}/> */}
          </div>

          <div className="arrList">{/* <PureCompo/> */}</div>

          {/* <div className="hooks">
            <UseMemoHook/>
          </div> */}
          {/* 
           <div className="hooks">
            <RefInClass/>
          </div> */}

          <div className="hooks">
            {/* <UseReHook /> */}
          </div>

          <div className="hooks">
            {/* <ControlComponentm/> */}
          </div>
          <div className="hooks">
            {/* <UncontrolComponent/> */}
          </div>
          <div className="hooks">
            {/* <MyCounterApp/> */}
          </div>
          
          <div className="hooks">
            {/* {<HOCTwo/>} */}
          </div>

          <div className="hooks">
            {/* <MainRoute/> */}
          </div>
          <div className="hooks">
            {/* <Nav/> */}
          </div>
          <div className="hooks">
            {/* {<Error404/>} */}
          </div>
          
          <div className="hooks">
            {/* <DynRouting/> */}
          </div>

          <div className="hooks">
            {/* <ApiApp/> */}
          </div>

          <div className="hooks">
            {/* <ApiApp/> */}
          </div>
          
          <div className="hooks">
            {/* <MethodPost/> */}
          </div>
          
          <div className="hooks">
            {<NoteState/>}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
