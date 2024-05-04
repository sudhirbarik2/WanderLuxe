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
  const [refetch, setRefetch] = useState(false)
  const [errormsg, setErrorMsg] = useState('')
  function fetchUsers() {
    axios.get(backendUrlUser + "/getUsers")
      .then((response) => {
        setUsers(response.data)

      })
      .catch((error) => {

      })
  }
  function deleteUser(uid) {
    if (uid === 'U1002') setErrorMsg('This Primary admin cannot be deleted !!')
    else {
      setErrorMsg('')
      axios.delete(backendUrlUser + '/deleteUser/' + uid)
      .then((response) => {
        console.log("User deleted");

      }).catch((e) => {
        console.log(e.message);
      })
    }
  }
  function changeAdmin(access, id) {
    console.log(access, id);
    axios.put(backendUrlUser + '/changeUserType/' + id + '/' + access)
      .then((response) => {
        console.log("User type changed");

      }).catch((e) => {
        console.log(e.message);
      })
  }
  useEffect(() => {
    fetchUsers()
  }, [refetch]);

  console.log(refetch);

  return (
    <div>
      <div style={{ backgroundColor: "black", marginTop: "-1%" }}>
        <div style={{ minHeight: "100vh" }} className=''>
          {/* <header className="masthead " id="page-top"></header> */}
          <div className='row' style={{}}>
            <div className='col-md-2'></div>
            <div className='col-md-8'><br /><br />
              <span className='text-warning' style={{ fontSize: "30px" }}>Registered users</span><br /><br />
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
                      let admiin;
                      if (user.admin) admiin = 'checked'
                      return (
                        <tr key={id}>
                          <td>{user.userId}</td>
                          <td>{user.name}</td>
                          <td>{user.emailId}</td>
                          <td>{user.contactNo}</td>
                          <td>{user.admin ? "Admin" : "User"}</td>
                          <center>
                            <td><div className="form-check form-switch">
                              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked={user.admin} onClick={() => { changeAdmin(!user.admin, user.userId); setRefetch(!refetch) }} />
                            </div></td>
                          </center>
                          <td><BsFillTrash3Fill style={{ cursor: "pointer" }} onClick={() => { deleteUser(user.userId); setRefetch(!refetch) }} /></td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
              {errormsg!==""?<span className='text-danger animateText'>{errormsg}</span>:""}
            </div>
            <div className='col-md-2'></div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default UserManagement;
