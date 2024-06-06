// input feild which controlled by direct JAVAASCRIPT or useRef

import React, { useRef } from "react";
// import { Button } from "react-bootstrap";
import { useState } from "react";



export default function UncontrolComponent() {

  const [val ,setVal] = useState(0)
  // just to print we involve the  states

  let getInputValueOne = useRef(null);
  let getInputValueTwo = useRef(null)

  function saveSubmit(e) {
    e.preventDefault();
    // console.log(" Hello form Submitted"); 
    // getInputValueOne.current.style.color = 'white'
    

    console.warn('the third value is : ',getInputValueOne.current.value)
    console.warn('the third value is : ',getInputValueTwo.current.value)

    let inputThree = document.getElementById('three').value
    console.warn('the third value is : ',inputThree)
  }

  
  function handleChange(e){
    setVal(e.target.value)
  }

  return (
    <>4

      <div className="main">
        <h1>
          {" "}
          UncontrolComponent - input feild which controlled by direct
          JAVAASCRIPT or useRef{" "}
        </h1>
        <div className="submain" style={{ padding: "1rem" }}>
          <form action="" onSubmit={saveSubmit}>
            <input type="text" ref={getInputValueOne} onChange={(e)=>handleChange(e)}/>
            <br />
            <h1 style={{color:"whitesmoke"}}> 
            </h1>

            <br />
            <input type="text" ref={getInputValueTwo} />
            <br />
            <h1 style={{color:"whitesmoke"}}>
                 {/* {getInputValueTwo.current.} */}
            </h1>
            <h1>
                <input type="text" id="three" />
            </h1>
           
            <br />
            <button>Submit</button>
            {/* <Button style={{ marginTop: "1rem" }}>Submit</Button> */}
          </form>

          {/* just print e invlove state  */}
          <div className="print">
            <h1>{val}</h1>
          </div>
        </div>
      </div>
    </>
  );
}
