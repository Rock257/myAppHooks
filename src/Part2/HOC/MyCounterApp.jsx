import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";

export default function MyCounterApp() {
  const [count, setCount] = useState(0);

  function HOCRed(props) {
    return (
      <h2 style={{ backgroundColor: "red", width: "100%" }}>
        {count}
        <br /> {props.cmp}{" "}
      </h2>
    );
  }

  function HOCGreen(props) {
    return (
      <h2 style={{ backgroundColor: "green", width: "100%" }}>
        {count}
        <br />
        {props.cmp}
      </h2>
    );
  }

  function HOCBlue(props) {
    return (
      <h2 style={{ backgroundColor: "blue", width: "100%" }}>
        {count}
        <br />
        {props.cmp}
      </h2>
    );
  }

  function HOCYellow(props) {
    return (
      <h2 style={{ backgroundColor: "yellow", width: "100%" }}>
        {count}
        <br />
        {props.cmp}
      </h2>
    );
  }
  function Counter() {
    return (
      <>
        {/* <h1>{count}</h1> */}
        <Button onClick={() => setCount(count + 1)}>Counter Click</Button>
      </>
    );
  }
  return (
    <>
      <div className="main" style={{display: "flex", flexDirection: 'column', gap:'2rem'}}>
        <h1>HOC -Higer order component</h1>
        <HOCRed cmp={<Counter />} />
        <HOCGreen cmp={<Counter />} />
        <HOCYellow cmp={<Counter />} />
        <HOCBlue cmp={<Counter />} />
      </div>
    </>
  );
}
