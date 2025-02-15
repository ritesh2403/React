import React, { Component } from "react";
import { ProductConsumer } from "../../Context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "../Button";
class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            company,
            img,
            info,
            price,
            title,
            inCart
          } = value.detailProduct;
          return (
            <div className="conatainer py-5">
              {/* title*/}
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted  text-blue my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              {/* product info*/}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <img src={img} className="img-fluid" alt="Product"></img>
                </div>

                {/* product text*/}
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h1>model:{title}</h1>
                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                    made by:<span className="text-uppercase">{company}</span>
                  </h4>
                  <h4 className="text-blue">
                    <strong>Price:{price}</strong>{" "}
                    <span>
                      <i className="fa fa-inr" aria-hidden="true"></i>
                    </span>{" "}
                  </h4>
                  <p className="text-capitalize.font-weight-bold mt-3 mb-0">
                    <h3>
                      <b>Info About Product</b>
                    </h3>
                  </p>
                  <p className="text-muted lead">{info}</p>

                  {/* button*/}
                  <div>
                    <Link to="/">
                      <ButtonContainer>back to product</ButtonContainer>
                    </Link>

                    {/* checking if product is added in cart on detail page if not addtocart functionality is called*/}
                    <ButtonContainer
                      Cart
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                      }}
                    >
                      {inCart ? "inCart" : "add to cart"}
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
export default Details;
