import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ProductConsumer } from "../../Context";
import PropTypes from "prop-types";
class Product extends Component {
  render() {
    /*{fetching data passed from productlist}*/
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <ProductWrapper className="col-12 mx-auto col-md-3 col-lg-4 my-4  ">
        <div className="card">
          <ProductConsumer>
            {value => (
              /*{updating details for each item}*/
              <div
                className="img-container p-5 "
                onClick={() => value.handleDetail(id)}
              >
                <Link to="/details">
                  <img src={img} alt="product" className="card-img-top"></img>
                </Link>

                <button
                  /*{checking if product is added or not}*/
                  className="cart-btn"
                  disabled={inCart ? true : false}
                  onClick={() => {
                    value.addToCart(id);
                    value.openModal(id);
                  }}
                >
                  {inCart ? (
                    <p className="text-capitalize mb-0" disabled>
                      {" "}
                      in cart
                    </p>
                  ) : (
                    <i className="fa fa-shopping-cart"></i>
                  )}
                </button>
              </div>
            )}
          </ProductConsumer>

          {/* card footer*/}

          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-between mb-0">{title}</p>

            <h5 className="text-blue font-italic mb=0">
              <span className="mr-1">
                <i className="fa fa-inr" aria-hidden="true"></i>
              </span>
              {price}
            </h5>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}
Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired
};

export default Product;

const ProductWrapper = styled.div`
  .card {
    border: 0.1rem dotted rgb(100, 82, 82);
    transition: all 1s linear;
  }

  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 1s linear;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px, 2px, 5px, 0px rgba(0, 0, 0, 0.2);
    }
  }
  .card-footer {
    background: rgba(247, 247, 247);
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }

  .img-container:hover .card-img-top {
    transform: scale(1.1);
  }

  .card-img-top {
    transition: all 1s linear;
  }

  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--lightblue);
    border: none;
    color: var(--mainwhite);
    border-radius: 0.5 0 0 0;
    font-size: 1.4rem;
    transform: translate(350%, 350%);
    transition: all 0.7s linear;
  }

  .cart-btn-hover {
    transform: translate(0, 0);
  }

  .img-container:hover .cart-btn {
    transform: translate(0, 0);
  }

  .cart-btn:hover {
    color: var(--mainBlue);
    cursor: pointer;
  }
`;
