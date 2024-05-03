import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import './App.css'
import './index.css'
import './Home.css'
import axios from "axios";
import { useState, useEffect } from "react";
import { backendUrlPackage, backendUrlBooking, backendUrlUser } from './BackendURL';
function Home() {
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

  return (
    <div style={{ backgroundColor: "black" }}>
      <div style={{ minHeight: "80vh" }} className='masthead'>
        {/* <header className="masthead " id="page-top"></header> */}
        <div className='row'>
          <div className='col-md-2'></div>
          <div className='col-md-8'>
            <span className='text-warning' style={{fontSize:"30px"}}>Registered users</span><br/>
            <table className="table table-dark table-bordered">
              <thead>
                <tr>
                  <th scope="col">User ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email-id</th>
                  <th scope="col">Phone</th>
                </tr>
              </thead>
              <tbody>
                {
                  users.map((user,id) => {
                    return (
                      <tr key={id}>
                        <td>{user.userId}</td>
                        <td>{user.name}</td>
                        <td>{user.emailId}</td>
                        <td>{user.contactNo}</td>
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
      <section className="contact-section bg-black">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-3 mb-md-0">
              <div className="card py-4 h-100">
                <div className="card-body text-center">
                  {/* <h4 className="text-uppercase m-0">Address</h4> */}
                  {/* <hr className="my-4" /> */}
                  <div className="small text-black-50">Howrah, West Bengal, India</div>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-3 mb-md-0">
              <div className="card py-4 h-100">
                <div className="card-body text-center">
                  {/* <h4 className="text-uppercase m-0">Email</h4> */}
                  {/* <hr className="my-4" /> */}
                  <div className="small text-black-50"><Link to="/home">mail.wanderluxe.com</Link></div>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-3 mb-md-0">
              <div className="card py-4 h-100">
                <div className="card-body text-center">
                  {/* <h4 className="text-uppercase m-0">Phone</h4> */}
                  {/* <hr className="my-4" /> */}
                  <div className="small text-black-50">+91 1234123456</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
