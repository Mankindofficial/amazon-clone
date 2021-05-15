import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ProductsPage from './components/ProductsPage/ProductsPage'
import Checkout from './components/CheckOut/Checkout'
import Header from './components/Header'
import Home from './components/Home/'
import Footer from './components/Footer'
import { AppContext } from './AppContext'
import './App.css'

const App = () => {

  return (
    <AppContext>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products">
            <ProductsPage />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
        </Switch> 
        <Footer />
      </Router>
    </AppContext>    
  );
}

export default App;
