import React from 'react'
import Home from '../component/Home'
import About from '../component/About'
import Contact from '../component/Contact'
import {BrowserRouter as Router ,Route, Routes ,Link} from 'react-router-dom'
import MainContextApp from '../MainContextApp'



export default function NoteState() {
  return (
    <MainContextApp> 
    <div className=' nav'>
        <h1>MiniApp</h1>
        <Router>
            <Link to= '/' >Home</Link>
            <Link to= 'about'>About</Link>
            <Link to= 'contact'>Contact</Link>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/about' element= {<About/>}></Route>
                <Route path='/contact' element = {<Contact/>}></Route>
            </Routes>
        </Router>
    </div>
</MainContextApp>
  )
}
