import React, { useEffect, useState } from "react";

function MethodPost() {
  const [name, setName] = useState("");
  const [website, setWebsite] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((res) => {
      res.json(res).then((data) => {
        console.warn(data);
      });
    });
  }, []);

  function handleSave() {
    console.warn(name, phone, website);
    let data = { name, website, phone };
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        Content: "application/json",
      },
      body: JSON.stringify(data),
    }).then((result) => {
    //   console.warn("result is : ", result);
    result.json().then((res)=>{
        console.warn('responce is ', res)
    })
    });
  }
  return (
    <>
      <h1>Post Method</h1>
      <div
        className="mainapp"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="website"
          onChange={(e) => {
            setWebsite(e.target.value);
          }}
        />
        <input
          type="text"
          name="phone"
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
        <button onClick={() => handleSave()}>Save</button>
      </div>
    </>
  );
}

export default MethodPost;
