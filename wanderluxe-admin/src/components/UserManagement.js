import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import '../App.css'
import '../index.css'
import '../Home.css'
import axios from "axios";
import { useState, useEffect } from "react";
import { backendUrlPackage, backendUrlBooking, backendUrlUser } from '../BackendURL';
import { BsFillTrash3Fill } from "react-icons/bs";


function UserManagement() {
  const [users, setUsers] = useState([])
  function fetchUsers() {
    axios.get(backendUrlUser + "/getUsers")
      .then((response) => {
        setUsers(response.data)

      })
      .catch((error) => {

      })
  }
  useEffect(() => {
    fetchUsers()
  }, []);

  console.log(users);

  return (
    <div>
      <div style={{ backgroundColor: "black", marginTop: "-1%" }}>
        <div style={{ minHeight: "100vh" }} className=''>
          {/* <header className="masthead " id="page-top"></header> */}
          <div className='row' style={{}}>
            <div className='col-md-2'></div>
            <div className='col-md-8'><br/><br/>
              <span className='text-warning' style={{ fontSize: "30px" }}>Registered users</span><br /><br/>
              <table className="table table-dark table-bordered">
                <thead>
                  <tr>
                    <th scope="col" className='text-warning'>User ID</th>
                    <th scope="col" className='text-warning'>Name</th>
                    <th scope="col" className='text-warning'>Email-id</th>
                    <th scope="col" className='text-warning'>Phone</th>
                    <th scope='col' className='text-warning'>User Type</th>
                    <th scope='col' className='text-warning'>Admin?</th>
                    <th scope='col' className='text-warning'>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    users.map((user, id) => {
                      return (
                        <tr key={id}>
                          <td>{user.userId}</td>
                          <td>{user.name}</td>
                          <td>{user.emailId}</td>
                          <td>{user.contactNo}</td>
                          <td>userType</td>
                          <center>
                            <td><div className="form-check form-switch">
                              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked />
                            </div></td>
                          </center>
                          <td><BsFillTrash3Fill /></td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            </div>
            <div className='col-md-2'></div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default UserManagement;
