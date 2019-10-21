import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    /*{comman layout for all pages shown in top}*/
    return (
      /*{ home icon}*/

      <nav className="navbar navbar-dark bg-dark">
        <Link to="/">
          <i className="fa fa-home" aria-hidden="true">
            Home
          </i>
        </Link>

        {/* product header*/}
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-Link">
              Products
            </Link>
          </li>
        </ul>
        {/* cart icon*/}

        <div>
          <Link to="/cart" className="ml-auto">
            <i className="fa fa-shopping-cart"><span className="label label-success cart-item-count " id='cart-count'>{localStorage['cart']}</span></i>
          </Link>
        </div>
      </nav>
    );
  }
}

export default Navbar;
