import React from "react";
/*{fetching data from cartlist as item and value}*/
export default function CartItem({ item, value }) {
  console.log(value);
  console.log(item);
  const { id, title, img, price, total, count } = item;
  const { increment, decrement, removeitem } = value;
  return (
    //displaying image,title,price,total of product in cart & added increment and decrement functionality
    <div className="row my-2 text-capitalize text-center">
      <div className="col-10 mx-auto col-lg-2">
        <img
          src={img}
          style={{ width: "Srem", height: "Srem" }}
          className="img-fluid"
          alt="product"
        />
      </div>

      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">product:</span>
        {title}
      </div>

      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">price:</span>
        {price}
      </div>

      <div className="col-10 mx-auto col-lg-2 my-2 my-lg 0">
        <div className="d-flex justify-content-center">
          <span
            className="btn btn-black mx-1 btn-hover"
            onClick={() => decrement(id)}
          >
            -
          </span>

          <span className="btn btn-black mx-1">{count}</span>
          <div
            className="btn btn-black mx-1 btn-hover"
            onClick={() => increment(id)}
          >
            +
          </div>
        </div>
      </div>

      <div className="col-10 mx-auto col-lg-2">
        <div className="cart-icon" onClick={() => removeitem(id)}>
          <i class="fa fa-trash" aria-hidden="true"></i>
        </div>
      </div>

      <div className="col-10 mx-auto col-lg-2">
        <strong>
          item total:<i class="fa fa-inr" aria-hidden="true"></i>
          {total}
        </strong>
      </div>
    </div>
  );
}
