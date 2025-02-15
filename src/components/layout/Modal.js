import React, { Component } from "react";
import styled from "styled-components";
import { ProductConsumer } from "../../Context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "../Button";

class Modal extends Component {
  render() {
    return (
      /*{fetching data from context-api using consumer}*/
      <ProductConsumer>
        {value => {
          const { modalOpen, closeModal } = value;
          const { img, title, price } = value.modalProduct;

          if (!modalOpen) {
            return null;
          } else {
            /*{modal page details}*/
            return (
              <ModalContainer>
                <div className="container">
                  <div className="row">
                    <div
                      id="modal"
                      className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize"
                    >
                      <h5>item added to cart</h5>
                      <img src={img} className="img-fluid" alt="product"></img>
                      <h5>{title}</h5>
                      <h5 className="text-muted">
                        <i className="fa fa-inr" aria-hidden="true"></i> {price}
                      </h5>

                      {/*Rendering between home page and modal page using link */}
                      <Link to="/">
                        <ButtonContainer onClick={() => closeModal()}>
                          Store
                        </ButtonContainer>
                      </Link>

                      {/*Rendering between modal page and cart page using link */}
                      <Link to="/cart">
                        <ButtonContainer onClick={() => closeModal()}>
                          go to cart
                        </ButtonContainer>
                      </Link>
                    </div>
                  </div>
                </div>
              </ModalContainer>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}

export default Modal;
const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  .modal {
    background: var(--mainWhite);
  }
`;
