import React from "react";
import './Mains.css'
import style from './custom.module.css'

export default function ForStyle(){
    return(
        <>
        <div className="main">


            {/* import css  */}
        <h1 style={{fontSize : '3rem'}}>Let know about styling in React</h1>

        {/* inline css */}
        <h2 style={{fontWeight: "bolder", color :"aquamarine"}} >here is the h2 tag</h2>

        <h3>Here is the h3 tag</h3>
        {/* modular custom css */}
        <h4 className={style.success}>Here is the h4 tag</h4>
        </div>
        
        </>
    )
}