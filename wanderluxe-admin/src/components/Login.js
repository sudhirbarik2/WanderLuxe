import React from 'react';
import { useState, useEffect } from "react";
import '../log.css'
function Login() {
  // useEffect(() => {
    
  // }, []);
  function log() {
    sessionStorage.setItem("userId", "U1001");
    console.log("Logging");
  }
  return (
    <div>
      <div className="container" style={{ paddingTop: "150px" }}>
        <div className="row">
          <div className="col-md-5 mx-auto">
            <div id="first">
              <div className="myform form ">
                <div className="logo mb-3 note">
                  <div className="col-md-12 text-center">
                    <h2>Hi Admin !</h2>
                    <h1>Login</h1>
                  </div>
                </div>
                <form action="/" name="login">
                  <div className="form-group" style={{ textAlign: "left" }}>
                    <label htmlFor="exampleInputEmail1" style={{ paddingLeft: "5px" }}>Email address</label>
                    <input type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                  </div>
                  <div className="form-group" style={{ textAlign: "left" }}>
                    <label htmlFor="exampleInputEmail1" style={{ paddingLeft: "5px" }}>Password</label>
                    <input type="password" name="password" id="password" className="form-control" aria-describedby="emailHelp" placeholder="Enter Password" />
                  </div>

                  <div className="col-md-12 text-center " style={{marginTop:"5px"}}>
                    <button type="submit" className=" btn btn-block mybtn btn-primary tx-tfm" onClick={log}>Login</button>
                  </div>

                </form>

              </div>
            </div>
          </div>
        </div>
      </div>

    </div >
  );
}

export default Login;
