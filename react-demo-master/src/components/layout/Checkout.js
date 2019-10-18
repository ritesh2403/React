import React, { Component } from 'react'
import Title from './Title'
import {Link} from 'react-router-dom'
export class Checkout extends Component {
    render() {
        return (
            <div className="py-6">
                 <div className=" container">
                     <Title name="Thankyou" title="Your order Has Been Placed "></Title>
                     <div className="row">
                     </div>
                     </div> 
           

              <Link to="/">
              <h5 className="col-xs-4 text-center">
                
                <button
                  className="btn btn-outline-success text-uppercase mr-55 mb-3 px-5"
                  type="button"
                >Continue Shopping
                </button>
                
              </h5>
            </Link>

             </div>
        )
    }
}

export default Checkout
