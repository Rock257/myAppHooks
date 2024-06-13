import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./apidata.css";

import { Table } from "react-bootstrap";

export default function ApiApp() {
  const [userData, setUserData] = useState([]);
  const [post ,setPost] =  useState([])

  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users").then((result) => {
      result.json(result).then((res) => {
        console.log(res);
        setUserData(res);
      });
    });

  }, []);

  useEffect(()=>{
    
    fetch("https://jsonplaceholder.typicode.com/posts").then((results) => {
      results.json(results).then((responce) => {
        console.log(responce);
        setPost(responce);
      });
    });
  },[])

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/todos")
  //     .then((responce) => {
  //       responce.json(responce);
  //     })
  //     .then((results) => {
  //       console.log(results);
  //       // setUserData(result)
  //     });
  // }, []);

  return (
    <>
      <h1>API data show here</h1>
      <div className="apidata">
        <table border="1">
          <tbody>
            <tr>
              <td>Id</td>
              <td>Name</td>
              <td>Phone</td>
              <td>Username</td>
              <td>Website</td>
            </tr>
            {userData.map((item) => {
              return (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.phone}</td>
                  <td>{item.username}</td>
                  <td>{item.website}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <h1>User  Table</h1>
      <div className="user-table">
        <Table border='1'  id="userTable">
          <tbody>
            <tr>
              
              <td>Id</td>
              <td>Title</td>
              <td>Body</td>
              
            </tr>

            {
              post.map((item)=>{
                return(
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.body}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </Table>
      </div>
    </>
  );
}
