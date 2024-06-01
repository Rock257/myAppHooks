import React from "react";
import { Button } from "react-bootstrap";
import { Table } from "react-bootstrap";

export default function NestedArray() {
  const student = [
    {
      name: "Rahul",
      email: "sonit862t@gmail.com",
      contact: 464494946,
      Address: [{ hNo: "35" }, { city: "Noida" }, { country: "India" }],
    },

    {
      name: "Sia",
      email: "siai862t@gmail.com",
      contact: 974549462,
      Address: [{ hNo: "58" }, { city: "Ryad" }, { country: "UAE" }],
    },

    {
      name: "Shruti",
      email: "Shrutui2t@gmail.com",
      contact: 6634719494,
      Address: [{ hNo: "11" }, { city: "Banglore" }, { country: "India" }],
    },

    {
      name: "Tripti",
      email: "stripti2@gmail.com",
      contact: 696494946,
      Address: [{ hNo: "97" }, { city: "Newyork" }, { country: "U.S" }],
    },
  ];

  return (
    <>
      <div className="main">
        <h1>Handling Nested Array with Map function</h1>
        <Table variant="dark" striped>
          <tbody>
            <tr>
              <td>S.No</td>
              <td>Name</td>
              <td>Email</td>
              <td>Contact</td>
              <td>Address</td>
            </tr>

            {student.map((item, idx) => {
              return (
                <tr key={idx }>
                  <td>{idx +1}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.contact}</td>
                  <td>
                    {item.Address.map((data, i) => {
                      return (
                        <Table variant="dark" striped>
                          <tbody>
                            <tr key={i}>
                              <td>{data.hNo}</td>
                              <td>{data.city}</td>
                              <td>{data.country}</td>
                            </tr>
                          </tbody>
                        </Table>
                      );
                    })}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
}
