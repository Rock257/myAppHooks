import React from "react";
import Button from 'react-bootstrap/Button'; 
import {Table} from 'react-bootstrap'

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
            <Button varient = "primary"> Click Me</Button>
        </div>
        <div className="student">
            <h2>

            <Table striped border={1}> 
            <tbody> 

            
            <tr>
                <td>S.No</td>
            <td>Name</td>
            <td>Email</td>
            <td>Contact</td>
            </tr>
          
                {student.map((item ,i)=>
                ( 
                    <tr key={i}>
                        <td>{i}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.contact}</td>
                    </tr>
                )   
            ) }
            </tbody>
            </Table>
            </h2>
        </div>
        <div className="table">
            <Table>
                <tbody>
                    <tr>
                        <td>S.No.</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Contact</td>
                    </tr>
                    {
                        student.map((item,index)=>{
                            return(
                                <tr key={index}>
                                    <td>{index}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.contact}</td>
                                </tr>
                                
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
        </>
    )
}


export default HandleArray