import React from "react";
import CartItem from "./CartItem";
//fetching data from Cart as an value and iterating each item using map
export default function CartList({ value }) {
  const { cart } = value;
  console.log(cart);

  return (
    <div className="container-fluid">
      {cart.map(item => {
        /*{passing  whole object to cartitem  }*/
        return <CartItem key={item.id} item={item} value={value} />;
      })}
    </div>
  );
}
