import React from "react";
import  one  from "./Image/one.jpg";
import  two  from "./Image/two.jpg";
import  three  from "./Image/three.jpg";
import  four  from "./Image/four.jpg";
import  five  from "./Image/five.jpg";
import './test.css'

import { Image } from "react-bootstrap";
// lets create image slider

export default function Test() {
  const data = [
    {
      title: "one",
      img: one,
    },
    {
      title: "two",
      img: two,
    },
    {
      title: "three",
      img: three,
    },
    {
      title: "four",
      img: four,
    },
    {
      title: "five",
      img: five,
    },
  ];
  return (
    <>
    <div className="main">
         <h1>Image Gallary</h1>
         <div className="container">
            {/* <img src={one} alt="one imag" /> */}

            {
                data.map((item, index)=>{
                    return(
                    <Image src={item.img} key={index}  alt={item.title}  style={{border:'2px solid black', borderRadius: "2rem"}}/> 
                )
                })
            }
         </div>

    </div>
     
    </>
  );
}
