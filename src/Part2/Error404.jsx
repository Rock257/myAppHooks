import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

export default function Error404() {
  return (
    <>
      <Router>
        <Link to="/home" style={{textDecoration:'none', margin:'1rem'}}>Home</Link>
        <Link to="/about" style={{textDecoration:'none', margin:'1rem'}}>About</Link>

        <Link to="/contact" style={{textDecoration:'none' ,margin:'1rem'}}>Contact</Link>
        
        <div className="" style={{marginTop:'2rem', padding:'1rem' }}>

        <Routes>
          <Route path="/home" element ={<Home/>}></Route>
          <Route path="" element ={<Home/>}></Route>
          <Route path="/about" element ={<About/>}></Route>
          <Route path="/contact" element ={<Contact/>}></Route>
          <Route path="*" element={<PageNotFound/>}></Route>
        </Routes>
        </div>
       
      </Router>
    </>
  );
}

function Home() {
  return (
    <>
      <h1>Home</h1>
      <h3>This is Home Page</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
        aperiam, rem dolorum illum, dolore, doloribus libero molestias voluptate
        ipsa sed repudiandae. Iste, dolore quas rem obcaecati unde eveniet
        laudantium voluptatibus!
      </p>
    </>
  );
}

function About() {
  return (
    <>
      <h1>About</h1>
      <h3>This is About Page</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
        aperiam, rem dolorum illum, dolore, doloribus libero molestias voluptate
        ipsa sed repudiandae. Iste, dolore quas rem obcaecati unde eveniet
        laudantium voluptatibus!
      </p>
    </>
  );
}

function Contact() {
  return (
    <>
      <h1>Contact</h1>
      <h3>This is Contact Page</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
        aperiam, rem dolorum illum, dolore, doloribus libero molestias voluptate
        ipsa sed repudiandae. Iste, dolore quas rem obcaecati unde eveniet
        laudantium voluptatibus!
      </p>
    </>
  );
}

function PageNotFound(){
    return(
        <>
        <h1>Page Not Found</h1>
        <h3>The Page You Are Looking Is'nt Exist </h3>
        </>
    )
}
