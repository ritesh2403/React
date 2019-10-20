import React, {Fragment} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Productlist from './components/layout/Productlist';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import Cart from './components/cart/Cart';
import Details from './components/layout/Details';
import Modal from './components/layout/Modal';
import Checkout from './components/layout/Checkout';

import './App.css';

import { Provider } from 'react-redux';
import store from './store';

const App = () => (
	<Provider store={store}>
		<Router>
		  <Fragment>
		    <Navbar />

		    <section className='container'>
		      <Alert />
		      <Switch>
			  <Route exact path='/' component={Productlist} />
			  <Route exact path='/details' component={Details} />
	          <Route exact path='/cart' component={Cart} />
			  <Route exact path='/checkout' component={Checkout}/>
		      </Switch>
			  <Modal/>

		    </section>

		  </Fragment>

	  </Router>
  </Provider>
);


export default App;
