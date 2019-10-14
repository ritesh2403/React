import React, { Component } from "react";
import { Link } from "react-router-dom";
//import logo from '.../logo.svg'

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <Link to="/">
          <i class="fa fa-home" aria-hidden="true">
            Home
          </i>
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" classname="nav-Link">
              Products
            </Link>
          </li>
        </ul>

        <form className="example serach-form" id="searchbar" action="">
          <div class="input-group">
            <input
              type="text"
              placeholder="Search Products"
              name="search2"
              className="form-control"
            ></input>
            <div class="input-group-btn">
              <button class="btn btn-default" type="submit">
                {" "}
                <i class="fa fa-search" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </form>

        <Link to="/cart" className="ml-auto">
          <i class="fa fa-shopping-cart"> Cart</i>
        </Link>
      </nav>
    );
  }
}

export default Navbar;
