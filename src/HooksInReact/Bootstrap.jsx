import React from "react";
import {Button} from 'react-bootstrap'

export default function Bootstarp(){
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
        </>
    )
}