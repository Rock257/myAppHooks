// Lifting  state up or transfer data from child to parent component 

import React from "react";
import { Button } from "react-bootstrap";
import { useState } from "react";

export default function LiftingStateUp(props){

    const herName = "Aradhana Joshi"

    const dat  = "Shiv"

    return(
        <>
        <h1>Username : {props.name}</h1>
        <Button  variant="success" onClick={()=>props.setUserName('Sia')}> 
        Parent To Child
        </Button>
        <br />

        <Button onClick={()=>{props.msg(herName)}} style={{margin: '1rem'}}>
            Child TO Parent
        </Button>
        <div className="container">
            <h1>{dat}</h1>
        <Button onClick={()=>{props.val(dat)}}>
            Update Details
        </Button>
        </div>
        
        </>
    )
}