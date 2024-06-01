import React, {Fragment}from 'react'
import {Table }from 'react-bootstrap'

export default function ReactFragments() {
  return (
    <Fragment> 
        <h1>React Fragment : Use to handle multiple elements and component use as wrapper </h1>
        <Table striped >
            <tbody>
                <tr>
                    <td>Name</td>
                    <td>Proffesion</td>
                </tr>
                <tr>
                    <td>Rahul Soni</td>
                    <td>SDE II</td>
                </tr>
                
            </tbody>
        </Table>
   </Fragment>
  )
}
