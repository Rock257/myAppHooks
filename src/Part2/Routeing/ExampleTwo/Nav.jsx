import React from "react";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function Nav() {
  return (
    <>
      <div className="myapp"tyle={{display :"flex", flexDirection :'column'}}>
        <div className="navbar" style={{display :"flex", flexDirection :'row', gap:'1.5rem', justifyContent :'center', alignItems:"center", fontSize:'2rem',textDecoration :'none', marginTop :'1.5rem' }}>
          {/* <h1>Navbar</h1>
                <Home/>
                <About/>
                <Contact/>
                 */}
          <Router>
            <Link to="/home" style={{ textDecoration: "none" }}>
              Home
            </Link>
            <br />

            <Link to="/about" style={{ textDecoration: "none" }}>
              About
            </Link>
            <br />
            <Link to="/contact" style={{ textDecoration: "none" }}>
              Contact
            </Link>
            <div className="content">
                <Routes>
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/about" element = {<About/>}></Route>
                <Route path="/contact" element = {<Contact/>}></Route>
            </Routes>
            </div>
            
          </Router>
        </div>
      </div>
    </>
  );
}

export default Nav;
