import React from "react";
import { Link } from "react-router-dom";
//fetching data from cart as an value to display costing of product at the bottom of cart page
export default function CartTotal({ value }) {
  const { CartSubTotal, CartTax, CartTotal, clearCart } = value;
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
            <Link to="/">
              <button
                className="btn btn-outline-danger text-uppercase mb-3 px-5 btn-danger"
                type="button"
                onClick={() => clearCart()}
              >
                clear cart
              </button>
            </Link>

            {/* dispaying subtotal */}

            <h5>
              <span className="text-title">subtotal:</span>
              <strong>
                <i className="fa fa-inr" aria-hidden="true"></i> {CartSubTotal}
              </strong>
            </h5>

            {/* displaying tax */}

            <h5>
              <span className="text-title">tax:</span>
              <strong>
                <i className="fa fa-inr" aria-hidden="true"></i> {CartTax}
              </strong>
            </h5>

            {/* displaying total amount */}

            <h5>
              <span className="text-title">total:</span>
              <strong>
                <i className="fa fa-inr" aria-hidden="true"></i> {CartTotal}
              </strong>
            </h5>

            {/* rendering to checkout */}
            <Link to="/checkout">
              <h5>
                <span className="text-title"></span>
                <button
                  className="btn btn-outline-success text-uppercase mb-3 px-5 btn-success"
                  type="button"
                  onClick={() => clearCart()}
                >
                  <i className="fa fa-money" aria-hidden="true"></i>Checkout
                </button>
              </h5>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
