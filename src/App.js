import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import ProductList from './Components/ProductList';
import ProductDetails from './Components/ProductDetails';
import Cart from './Components/Cart';
import Default from './Components/Default';
import Modal from './Components/Modal';

class App extends React.Component {
  render() {
    return(
     <React.Fragment>
      <NavBar />
      <Switch>
        <Route path="/" component={ProductList} exact/>
        <Route path="/details" component={ProductDetails} exact />
        <Route path="/cart" component={Cart} exact/>
        <Route component={Default} />
      </Switch>
      <Modal />
     </React.Fragment>
    )
  }
}

export default App;
