import React, { useState } from "react";

export default function ControlComponentm() {

    const [val , setVal] = useState('100')

    function handleChange(e){
        setVal(e.target.value)
        console.warn(e.target.value)

    }

  return (
    <>
      <div className="main" style={{color:"white"}}>
        <h3>Controlled Copmonent - in which dom manipulation done by the state and props</h3>
        <h3>Uncontrolled Copmonent -  in which dom manipulation is done is direct like useRef </h3>
        <div className="subMain">
            <input type="text" defaultValue={100} onChange={(e)=>handleChange(e)} />
            <h3>{val}</h3>

        </div>
      </div>
    </>
  );
}
