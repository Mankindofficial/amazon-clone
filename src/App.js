import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ProductsPage from './components/ProductsPage/ProductsPage'
import Login from './components/Authentication/Login'
import Signup from './components/Authentication/Signup'
import Checkout from './components/CheckOut/Checkout'
import Order from './components/CheckOut/Order'
import Header from './components/Header'
import Home from './components/Home/'
import Footer from './components/Footer'
import { ContextConsumer } from './AppContext'
import { auth } from './firebase.js'
import './App.css'

const App = () => {

  const { setUser } = ContextConsumer()

  const authFunction = () => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser)
      } else {
        setUser(null)
      }
    });
  }

  useEffect(authFunction, [setUser]);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Header />
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/products">
          <Header />
          <ProductsPage />
        </Route>
        <Route path="/checkout">
          <Header />
          <Checkout />
        </Route>
        <Route path="/orders">
          <Header />
          <Order />
        </Route>
      </Switch> 
      <Footer />
    </Router>
  );
}

export default App;
