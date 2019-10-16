import React, { Component } from "react";
import { Link } from "react-router-dom";
//import logo from '.../logo.svg'

class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <Link to="/">
          <i className="fa fa-home" aria-hidden="true">
            Home
          </i>
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-Link">
              Products
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <i className="fa fa-shopping-cart"> Cart</i>
        </Link>

      </nav>
    );
  }
}

export default Navbar;
