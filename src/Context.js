import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";

const ProductContext = React.createContext();
//provider
//consumer

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
    cart: [],
    modalOpen: false,
    modalProduct: detailProduct,
    CartSubTotal: 0,
    CartTax: 0,
    CartTotal: 0
  };

  componentDidMount() {
    this.setProducts();
  }

  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach(item => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });

    this.setState(() => {
      return { products: tempProducts };
    });
  };

  getItem = id => {
    const product = this.state.products.find(item => item.id === id);
    return product;
  };
  handleDetail = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return { detailProduct: product };
    });
  };

  addToCart = id => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;

    this.setState(
      () => {
        return { products: tempProducts, cart: [...this.state.cart, product] };
      },
      () => {
        this.addTotals();
      }
    );
  };

  maintainCart = id => {
    var previous_count = parseInt(localStorage['cart']);
    localStorage.setItem("cart", previous_count + 1)
    var current_count = parseInt(localStorage['cart']);
    document.getElementById('cart-count').innerHTML = current_count;
  };

  openModal = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return { modalProduct: product, modalOpen: true };
    });
  };

  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false };
    });
  };
  increment = id => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => item.id === id);

    const index = tempCart.indexOf(selectedProduct);

    const product = tempCart[index];

    product.count = product.count + 1;

    product.total = product.count * product.price;

    this.setState(
      () => {
        return { cart: [...tempCart] };
      },
      () => {
        this.addTotals();
      }
    );
  };

  decrement = id => {
    let tempCart = [...this.state.products];
    const SelectedProduct = tempCart.find(item => item.id === id);
    const index = tempCart.indexOf(SelectedProduct);
    const product = tempCart[index];

    product.count = product.count - 1;
     console.log(product.count);
     console.log(id);
    if (product.count ===0) {
      this.removeitem(id);
    } else {
      product.total = product.count * product.price;
    }
    this.setState(
      () => {
        return {
          products: [...tempCart]
           };
      },
      () => {
        this.addTotals();
      }
    );
  };

  removeitem = id => {
    let tempProducts = [...this.state.products];
    let tempcart = [...this.state.cart];

    tempcart = tempcart.filter(item => item.id !== id);
    const index = tempProducts.indexOf(this.getItem(id));
    let removeProduct = tempProducts[index];
    removeProduct.inCart = false;
    removeProduct.count = 0;
    removeProduct.total = 0;

    this.setState(
      () => {
        return {
          cart: [...tempcart],
          products: [...tempProducts]
        };
      },
      () => {
        this.addTotals();
        var previous_count = parseInt(localStorage['cart']);
        localStorage.setItem("cart", previous_count - 1)
        var current_count = parseInt(localStorage['cart']);
        document.getElementById('cart-count').innerHTML = current_count;
      }
    );
  };

  clearCart = () => {
    this.setState(
      () => {
        return { cart: [] };
      },
      () => {
        this.setProducts();
        this.addTotals();
        localStorage.setItem("cart", 0)
        document.getElementById('cart-count').innerHTML = 0;
      }
    );
  };

  addTotals = () => {
    let subTotal = 0;
    this.state.cart.map(item => (subTotal += item.total));
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;

    this.setState(() => {
      return {
        CartSubTotal: subTotal,
        CartTax: tax,
        CartTotal: total
      };
    });
  };
  /* tester=()=>{

         console.log('state product:',this.state.products[0].inCart);
         console.log('data product:',this.state.storeProducts[0].inCart);

         const tempProducts=[...this.state.products];
         tempProducts[0].inCart=true
         this.setState(()=>{

             return {products:tempProducts}
         },()=>{
             console.log('state product:',this.state.products[0].inCart);
         console.log('data product:',this.state.storeProducts[0].inCart);
         })
     }*/

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeitem: this.removeitem,
          clearCart: this.clearCart,
          maintainCart: this.maintainCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
