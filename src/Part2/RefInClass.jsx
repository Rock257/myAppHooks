//  ref : to manipilate the DOM directly like  hide and show element forcefully change style  
// it not advised to use much ref in react js as react didnt DOM direclty

// import { Component } from "react";
import React, { createRef } from "react";
import {Button} from 'react-bootstrap'

export default class RefInClass extends React.Component{
    constructor(){
        super()
        this.inputRef = createRef();
    }

    // componentDidMount(){
    //     console.warn(this.inputRef.current.value = 1000)
    // }

    getData(){
        const val = this.inputRef.current.value
        const colorChange = this.inputRef.current.style.color = 'red '
        console.warn(val)
        // return val
    }

    render(){

        return(
            <>
            <h1>Hello This is about Ref  </h1>

            <input type="text" ref={this.inputRef}/>

            <Button onClick={()=>this.getData()}> 
                Check Ref
            </Button>
            </>
        )
    }
}