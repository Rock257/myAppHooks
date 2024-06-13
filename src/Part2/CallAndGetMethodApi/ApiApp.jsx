import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import './apidata.css'

export default function ApiApp() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((result) => {
      result.json(result).then((res) => {
        console.log(res);
        setUserData(res);
       
      });
    });
  }, []);


  return (
    <>
      <h1>API data show here</h1>
      <div className="apidata">
        
          <table border='1' >
            <tbody>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Phone</td>
                    <td>Username</td>
                    <td>Website</td>
                </tr>
                {
                    userData.map((item)=>{
                        return(
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.phone}</td>
                                <td>{item.username}</td>
                                <td>{item.website}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
          </table>
      </div>
    </>
  );
}
