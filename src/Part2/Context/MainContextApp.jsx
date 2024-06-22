
import React, { useState } from 'react'
import NoteContext from './noteContext'

 function MainContextApp(props) {

    const userData = {
        "name" : "Katherine Langford",
        'location' : "Austria",
        'age' : 28

        
    }

    const [state ,setState] = useState(userData) ;

  const update=()=>{
    console.log('hello')
        setTimeout(()=>{
            setState({
                'name' :"Henry Kevil",
                'location' :"United State",
                'age' : 34
            })
        },2000)
    }


  return (
    <NoteContext.Provider value={{state ,update}} >
        {props.children}
    </NoteContext.Provider>

//        <NoteContext.Provider value={{state:state}} >
//        {props.children}
//    </NoteContext.Provider>
  )
}

export default MainContextApp ;