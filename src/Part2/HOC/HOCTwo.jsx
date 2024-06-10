import React, { useState } from "react";
import {Button} from 'react-bootstrap'

function HOCTwo(){
    return(
        <>
        <h1>Higher Order Component</h1>
        <HigherOrder cmp = {<Counter/>}/>
        </>
    )
    
}

// let  create higher order component it act as wrapper

function HigherOrder(props){
    return(
        <>
        <div className="main" style={{display:'flex', gap: '2rem', alignItems :"center", justifyContent :'center'}}>
            <h1 style={{backgroundColor :'red', padding: '.5rem'}}>Red Counter {props.cmp}</h1>
            <h1 style={{backgroundColor :'green', padding: '.5rem'}}>Green Counter {props.cmp}</h1>
            <h1 style={{backgroundColor :'yellow', padding: '.5rem', color : 'black'}}>Yellow Counter  {props.cmp}</h1>
        </div>
        
        </>
    )
}

function Counter(){

    const [count ,setCount]  = useState(0)
    return(
        <> 
        {count}
        <br />
        <Button onClick={()=>setCount(count+1)}>Counter Update</Button>
        </>
    )
}

 export default HOCTwo 