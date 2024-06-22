
import React ,{ useContext, useEffect } from 'react'
import noteContext from '../noteContext'

export default function About() {

    const userDetails =  useContext(noteContext)

    useEffect(()=>{
        userDetails.update()
    },[])

  return (
    <>
    <div>About</div>
    <h1>{userDetails.state.name}</h1>
    <h2>{userDetails.state.location}</h2>
    <h1>{userDetails.state.age}</h1>
    </>
  )  
}
