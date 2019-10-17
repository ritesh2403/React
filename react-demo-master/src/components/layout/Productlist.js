import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { ProductConsumer } from "../../Context";
class Productlist extends Component {
  constructor() {
    super();
    this.state = {
      search: ""
    };
    
  }
  /*{implemented update search fuctionality}*/
  updateSearch(event) {
    console.log(event.target.value);
    this.setState({ search: event.target.value.substr(0, 20) });
  }

  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className=" container">
            <Title name="Welcome" title="To Store"></Title>
            <div className="row">
              <div className="col-sm-12">
                <form className="example serach-form" id="searchbar" action="">
                  <div className="input-group">
                    <input
                      type="text"
                      placeholder="Search Products"
                      name="search2"
                      className="form-control"
                      onChange={this.updateSearch.bind(this)}
                    ></input>
                    <div className="input-group-btn">
                      <button className="btn btn-default" type="submit">
                        {" "}
                        <i className="fa fa-search" aria-hidden="true"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>

              <ProductConsumer>
                {value => {
                  return value.products.map(product => {
                    console.log(this.state.search);
                    if (
                      /* searching product by their title*/
                      product.title
                        .toLowerCase()
                        .includes(this.state.search.toLowerCase())
                    ) {
                      /*{ passing the product object to Product page}/*/
                      return (
                        <Product key={product.id} product={product}></Product>
                      );
                    }
                    return false;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Productlist;
