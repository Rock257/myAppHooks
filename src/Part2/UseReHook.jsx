import React from "react";
import {Button} from 'react-bootstrap'
import { useRef } from "react";

// use - for direct DOM manipulation like focus get Value ,style etc

export default function UseRefHook(){

    // let val = inputRef.current.value

    let getInputRef = useRef(null);

    function handleClick(){
        getInputRef.current.focus();
        getInputRef.current.value =9
        console.log('Hello useRef')
        console.log(getInputRef.current.value)
        getInputRef.current.style.color ='red'
        // getInputRef.current.style.display = 'none'
    
    }

    return(
        <>
        <h1> lets learn about the useRef React Hook </h1>
        <input type="text" ref={getInputRef}/>
        <br />
        <Button style={{marginTop: '1rem'}} onClick={()=>handleClick()}>Click Me</Button> 
        </>
    )
}