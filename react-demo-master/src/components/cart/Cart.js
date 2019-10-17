import React, { Component } from "react";
import Title from "../layout/Title";
import CartColumns from "./CartColumns";
import { ProductConsumer } from "../../Context";
import EmptyCart from './EmptyCart'
import CartList from './CartList'
import CartTotal from './CartTotal'
//main cart component to passed data to children 
class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {value => {
            const { cart } = value;
            /*{checking if cart is empty or not.if not empty rendering it to  other specfic pages}*/
            if (cart.length > 0)
              return (
                <React.Fragment>
                  <Title name="your" title="cart"></Title>
                  <CartColumns />
                  <CartList value={value}/>
                  <CartTotal value={value}/>
                  
                </React.Fragment>
                
              );
			  else{
				  return <EmptyCart/>
			  }
          }}
        </ProductConsumer>
      </section>
    );
  }
}

export default Cart;
