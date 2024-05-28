
import { useEffect, useState } from 'react';
import './App.css';
// import Basic from './HooksInReact/Basic';
// import UseEffectHook from './HooksInReact/UseEffectHook';
import ForStyle from './HooksInReact/ForStyle';
import Bootstarp from './HooksInReact/Bootstrap';
// import HandleArray from './HooksInReact/HandleArray';

function App() {

  const [status , setStatus] = useState('Active')

  // useEffect(()=>{
  //   console.warn('useEffect as props')
  // },[status])

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
            <div className="main">
              <ForStyle/>
            </div>
             <Bootstarp/>
          </div>

          <div className="arrList">
            {/* <HandleArray/> */}
          </div>
          
        </div>
      </header>
    </div>
  );
}

export default App;
