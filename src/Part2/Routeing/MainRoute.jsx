// npm install react-router-dom 
import React from "react";
import {BrowserRouter as Router , Route ,Link, Routes} from 'react-router-dom'

function MainRoute(){
    return(
        <>
        <h1>Routing In React </h1>
        <Router>
            <div className="link" style={{display :"flex", flexDirection :'row', gap:'1.5rem', justifyContent :'center', alignItems:"center", fontSize:'2rem',textDecoration :'none', marginTop :'1.5rem' }}>
                <Link to='/home' style={{textDecoration:'none'}}>Home</Link>
            <br />

            <Link to='/about' style={{textDecoration:'none'}}>About</Link> 
            <br />
            <Link to='/contact' style={{textDecoration:'none'}}>Contact</Link>
            </div>
            
            <Routes>           
                    <Route path="/home" element = {<Home/>}> </Route>
                    
                       <Route path="/about" element ={<About/>}></Route>
                   <Route path="/contact" element = {<Contact/>}></Route>        
            </Routes>
         
        </Router>
        </>
    )
}

function Home(){
    return(
        <>
         <h1>Home</h1>
        </>
       
    )
}
function About(){
    return(
        <>
        <h1>About</h1>
       </>
    )
}
function Contact(){
    return(
        <>
        <h1>Contact</h1>
       </>
    )
}


export default MainRoute