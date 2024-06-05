import React from "react";
import { useRef } from "react";
import {Button} from 'react-bootstrap'

// use - for DOM manipulation like focus get Value ,style etc

export default function UseRefHook(){

    const inputRef = useRef(null)

    const handleClick =()=>{
        console.warn('Btn Clicked')
        console.warn(inputRef.current.value)
        inputRef.current.value = 1000
        inputRef.current.focus()
        // inputRef.current.style.display = 'none'
        inputRef.current.style.color = 'red'

    }

    // let val = inputRef.current.value

    return(
        <>
        <h1> lets learn about the useRef React Hook </h1>

        <input type="text" ref ={inputRef} />
        <br />
        <br /> 
        <Button onClick={()=>handleClick()}>
            Submit
        </Button>

        </>
    )
}