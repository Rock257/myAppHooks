import React from "react";
import Button from 'react-bootstrap/Button'; 

export default function ReuseCompo(props) {
  return (
    <>
      <div
        className="main"
        style={{
          display: "flex",
          flexDirection: 'column',
          gap: "1rem",
          alignItems: "center",
          justifyContent: "center",
          padding: '1rem'
        }}
      >
        <span>{props.data.name}</span>
        <span>{props.data.email}</span>
        <span>{props.data.contact}</span>
        <br />
        <span className="btnClick">
            <Button onClick={()=>alert(props.data.name)}> 
            Click For Alert
            </Button> 
        </span>
      </div>
    </>
  );
}
