import React from 'react'
import {BrowserRouter as Router ,Link , Route ,Routes} from 'react-router-dom'
import User from './User'

export default function DynRouting() {

    const users =[
        {
            id : 1 , name :'Sanjana' ,email : 'xyxabc@gmail.com'
        },
        {
            id : 2 , name :'Ruhi' ,email : 'xyxamjsd@gmail.com'
        },
        {
            id : 3 , name :'Raj' ,email : 'xyxakxd@gmail.com'
        },
        {
            id : 4 , name :'Shreyaa' ,email : 'xyxkdms@gmail.com'
        },
        {
            id : 5 , name :'Anil' ,email : 'xyxiejd@gmail.com'
        },
    ]
  return (
    <>
    <Router>
    <h2>Dynamic Routing</h2>
        {users.map((item )=>
        <div className="user">
            <h2>
                    <Link to={'/user/' +item.id}>{item.name}</Link>        
                {/* <a href={'/user/' +item.id}>{item.name}</a> */}     
            </h2>         
        </div>
        )} 
        <Routes>
                        <Route path='/user/:id'element={<User/>}> </Route>
                    </Routes>
        </Router>
    </>
  )
}
