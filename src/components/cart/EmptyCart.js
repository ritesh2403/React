import React from "react";
import { Link } from "react-router-dom";
//if nothing added in cart this page is triggered
export default function EmptyCart() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-10 mx-auto text-center text-title">
          <h4>your cart is empty</h4>
          <Link to="/" className="nav-Link">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
