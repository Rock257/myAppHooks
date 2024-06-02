import React, { useState ,useMemo } from "react";
import {Button} from 'react-bootstrap'

export default function UseMemoHook(){
    const [count ,setCount] = useState(0)

    const [item ,setItem]  = useState(5);
    

    // const multipleCount =()=>{
    //     let newCount= count*10;
    //     return newCount;
    // }

    // console.log(multipleCount())
    
    
    // now we see that the multipleCount called everytime whenever the count update  which we want want 
    // but it also seen that the multipleCount is also called  when there is other state update like item update 
    // same value(previous value is called ) wheneven any other state update other than  this will impact efficency of out app  due to unnecesary called wanted function again again

    // to solve this we use useMemo

    const multiCountMemo = useMemo(()=>{
        console.log('MultiCount called useMemo works')
        return count*10 
    },[count])



    return(
        <>
        <h1>useMemo : use to make react app more efficent as Pure Component in Class component ,it stopped the  unwanted state and props update with same value</h1>

        <h2>{count}</h2>
        <Button variant="success" onClick={()=>setCount(count +2)}>Update Count</Button>
        <br />
        {/* <h1>{multipleCount()}</h1> */}
        <h2>{item}</h2>
        <Button onClick={()=>{setItem(item*5)}}>Multiple of 5</Button>

        <br />

        {/* after useMemo */}
        <h1> 
             {multiCountMemo}

        </h1>
        {/* now it called only when we count state update not the when other state update  */}
       
        </>
    )
}