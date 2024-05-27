import React from "react";
import { useState } from "react";

export default function Basic(){
    const [name ,setName]  =useState("RDJ")
    return(
        <>
        <h1>Getting Started With React Hooks</h1>
        {name}
        <br />
        <button onClick={()=>setName('Iron-Man')}>Clcik Here To Update</button>
        </>
    )
}