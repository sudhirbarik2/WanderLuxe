import React from 'react';
import { useState } from "react";
import { Button } from 'primereact/button';
import Login from './Login';
import { BrowserRouter as Link, Navigate } from 'react-router-dom';
// import { Dropdown } from 'bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useEffect } from 'react';
// import Dropdown from 'react-bootstrap/Dropdown';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbar() {
  const [logCheck, setLogCheck] = useState(false);
  const [loadHome, setLoadHome] = useState(false);
  const userId = sessionStorage.getItem("userId");
  // const navigate = useNavigate();
  console.log(userId);
  function logout() {
    sessionStorage.clear();
    setLoadHome(true)
    window.location.href = '/';
  }

  // if (loadHome === true) return <Navigate to={'/'} />
  return (
    // if (this.state.packagePage === true) return <Redirect to={'/packages/' + this.state.continent} />
    // loadHome ?  <Redirect to="/" /> : null
    <div>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-light">
        <a className="navbar-brand" style={{ paddingLeft: "30px" }} href="/">WanderLuxeAdmin</a>
        <div className="d-flex ms-auto order-5" style={{ paddingRight: "30px" }} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link hoverEffect" href="/">Home </a>
            </li>

            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Add Data"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#action/3.1">Hot Deals</NavDropdown.Item>
              <NavDropdown.Item href="/addData">Packages</NavDropdown.Item>
              {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}
            </NavDropdown>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Delete Data"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#action/3.1">Hot Deals</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Packages</NavDropdown.Item>
            </NavDropdown>
            <li className="nav-item">
              <a className="nav-link " href="#">User Management</a>
            </li>
            {!userId ?
              <li className="nav-item">
                <a className="nav-link" href="/login"> Login</a>
              </li> : null}
            {userId ?
              <li className="nav-item">
                <button className="buttonTransparent nav-link btn-link " onClick={logout} href='/'>Logout</button>
              </li> : null}
          </ul>
        </div>
      </nav>
      {/* {loadHome ?  <Navigate to="/" /> : null} */}
    </div>
  );
}

export default Navbar;
