import React, { useState } from "react";

export default function ControlComponentm() {

  const [val ,setVal] = useState(0)

  function handleChange(e){
    setVal(e.target.value)
  }

  return (
    <>
      <div className="main" style={{color:"white"}}>
        <h3>Controlled Copmonent - in which input feild handled by dom manipulation done by the state and props</h3>
        <h3>Uncontrolled Copmonent -  in which  input feild handled by dom manipulation is done is direct like useRef </h3>
        <div className="subMain">
          <input type="text" value={val} onChange={(e)=>handleChange(e)}/>
          <br />

          {val}
        </div>
      </div>
    </>
  );
}
