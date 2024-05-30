import React from "react";
import {Button} from 'react-bootstrap'

export default function Bootstarp(){

    const btnArr = ["primary" ,"secondary" ,"success" ,"warning" ,"danger","info", "light" ,"link"]
    return(
        <>
        <div className="bootstrapInfo">
            <h1>ts know about bootsteap</h1>
            <Button variant="primary" size = 'lg'  >Primary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="success">Success</Button>{' '}
      <Button variant="warning" size="sm">Warning</Button>{' '}
      <Button variant="danger">Danger</Button>{' '}
      <Button variant="info">Info</Button>{' '}
      <Button variant="light">Light</Button>{' '}S
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>
        </div>

        {/* /method 2the above same can be done with the map function in sorter code */}

        <div className="usingMap" style={{marginTop : '2rem'}}>
            {
                btnArr.map((item ,idx)=>{
                    return(
                        <Button variant={item} key={idx} style={{ padding : "2rem", fontSize :'1rem', textTransform : "capitalize" }} >
                            {item}
                        </Button>
                    )
                })
            }
        </div>
        </>
    )
}