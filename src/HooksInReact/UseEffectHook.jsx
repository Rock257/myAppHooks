import React, { useState, useEffect } from "react";

export default function UseEffectHook(props) {
  const [count, setCount] = useState(0);

  const [data, setData] = useState(17);

  const [name, setName] = useState("Sanjana");


  useEffect(() => {
    console.warn("Hello Dear I am Back Your Deva");
  },[props.state]);
  // this will create effect when any state change props
 


  useEffect(() => {
    console.warn("data update ");
  }, [data]);
  // the above will update the dom when any state and props change or recived and ,when the component is made or mount


  useEffect(() => {
    console.warn(
      "Hello Dear I am Back useEffect called only when the count is update "
    );
    // alert(`count is  ${count}`)
  }, [count]);

  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1);
    }, 5000);
  }, [count]);

  // the above will works as conditional update when the count state chnage then only the useEffect will runs

  return (
    <>

      <div className="main">
        <h1>useEffect Hook</h1>
        {count}
        <br />
        <button> Counter</button>
        <br />

        
        {name}
        <br />
        <button
          onClick={() => {
            setName("Deva");
          }}
        >
          Update Name
        </button>

        <br />
        <h1>Data = {data}</h1>
        <button
          onClick={() => {
            setData(data + 1);
          }}
        >
          Update Data
        </button>
        <br />
        <br />

        {props.state}

      </div>
    </>
  );
}
