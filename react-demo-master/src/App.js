import React, {Fragment} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Productlist from './components/layout/Productlist'
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Cart from './components/cart/Cart';
import Details from './components/layout/Details'

import './App.css';

const App = () => (
	<Router>
	  <Fragment>
	    <Navbar />
	    
	    <section className='container'>
	      <Switch>
		  <Route exact path='/' component={Productlist} />
		  <Route exact path='/details' component={Details} />	  
          <Route exact path='/cart' component={Cart} />
	      </Switch>
	    </section>
	  </Fragment>
  </Router>
);


export default App;
