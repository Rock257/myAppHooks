import React from "react";

function HandleArray(){

    const name = ['raj' ,'sana', 'reet' ,'rahul'] ;

    const student = [
        {name:'Rahul', email :"sonit862t@gmail.com" ,contact: 464494946} ,
        {name:'Sia', email :"siai862t@gmail.com" ,contact: 974549462},
        {name:'Shruti', email :"Shrutui2t@gmail.com" ,contact: 6634719494},
        {name:'Tripti', email :"stripti2@gmail.com" ,contact: 696494946},
    ]

    // using for loop
    for(let i= 0; i<name.length; i++){
        console.warn('here the list of name by for loop :',name[i])
        
    }
    // note  we cant use for loop in the return statement of function component

    // using map function

    name.map((i)=>{
        console.warn("Using map() : " ,i)
    })

    return(
        <> 
        <div className="main">
            <h1>
                {name.map((item)=>{

                return  <h2 style={{ color : "black"}}> Name : {item} </h2>
                })}
            </h1>
        </div>
        <div className="student">
            <h2>

            <table border={1}> 
            <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Contact</td>
            </tr>
          
                {student.map((item)=>{
                return ( 
                    <tr>
                      
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.contact}</td>
                    </tr>
                )   
            }) }
            </table>
            </h2>

            
            
        </div>
        </>
    )
}


export default HandleArray