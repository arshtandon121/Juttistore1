import React, { useState, useEffect } from "react"
import "./App.css"

import { BrowserRouter as Router, Switch, Route , Redirect} from "react-router-dom"
import Header from "./common/header/Header"
import Pages from "./pages/Pages"
import Data from "./components/Data"
import Cart from "./common/Cart/Cart"
import Footer from "./common/footer/Footer"
import Sdata from "./components/shops/Sdata"
import Pagesdata from "./pages/Pagesdata"

// import NavBar from '';
import Login from './authentication/Login';
// import SignUp from './authentication/SignUp';

import Email from "./Email"
import Commingsoon from "./Commingsoon"
// import LoginSignup from "./LoginSignup"
// import { useEffect, useState } from 'react';
// import './App.css';
// import NavBar from './NavBar';
// import Login from './authentication/Login';
// import SignUp from './authentication/SignUp';
// import Customer from './screens/Customer';







function App() {
 
  //  {
  //   const [ user , setUser] = useState('');
  //   const [toggleForm, setToggleForm] =  useState(true);
  //   const formMode = () => {
  //     setToggleForm(!toggleForm);
  //   }
  //   const userState = () => {
  //     const data = localStorage.getItem('user');
  //     const us = data !== null ? JSON.parse(data) : null;
  //     setUser(us);
  //   }
  
  //   useEffect(() => {
  //     userState();
  //   }, []);
    
  // }


  //Step 1 :
  const { productItems } = Data
  const { shopItems } = Sdata

  //Step 2 :
  const [CartItem, setCartItem] = useState([])

  //Step 4 :
  const addToCart = (product) => {

    const productExit = CartItem.find((item) => item.id === product.id)



    // if item and product doesnt match then will add new items
    if (productExit) {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
    } else {
      // but if the product doesnt exit in the cart that mean if card is empty
      // then new product is added in cart  and its qty is initalize to 1
      setCartItem([...CartItem, { ...product, qty: 1 }])
    }
  }

  // Stpe: 6
  const decreaseQty = (product) => {
    // if hamro product alredy cart xa bhane  find garna help garxa
    const productExit = CartItem.find((item) => item.id === product.id)

    // if product is exit and its qty is 1 then we will run a fun  setCartItem
    // inside  setCartItem we will run filter to check if item.id is match to product.id
    // if the item.id is doesnt match to product.id then that items are display in cart
    // else
    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id))
    } else {
      // if product is exit and qty  of that produt is not equal to 1
      // then will run function call setCartItem
      // inside setCartItem we will run map method
      // this map() will check if item.id match to produt.id  then we have to desc the qty of product by 1
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }
  

}




  return (
    <>
      <Router>
        <Header CartItem={CartItem} />
        <Switch>
          <Route path='/' exact>
            <Pages productItems={productItems} addToCart={addToCart} shopItems={shopItems}  />
          </Route>
          <Route path='/cart' exact>
            <Cart CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty} />
          </Route>  
          
          
          {/* <Route path='/Pagesdata' exact>
            <Pagesdata render={() => this.props.currentUser ? (<Redirect to='/' />) : <Pagesdata />}  />
          </Route>   */}
          <Route path='/user' exact>
            <Login render={() => this.props.currentUser ? (<Redirect to='/' />) : <Login />}  />
          </Route> 

          <Route path='/contact' exact>
            <Email render={() => this.props.currentUser ? (<Redirect to='/' />) : <Email />}  />
          </Route> 

          <Route path='/track' exact>
            <Commingsoon render={() => this.props.currentUser ? (<Redirect to='/' />) : <Commingsoon />}  />
          </Route> 

          <Route path='/contact' exact>
            <Email render={() => this.props.currentUser ? (<Redirect to='/' />) : <Email/>}  />
          </Route> 



          {/* <Route path='/user' render={() => this.props.currentUser ? (<Redirect to='/' />) : <SignInAndSignUpPage />} />  */}
        </Switch>
        
        <Footer />

        <>
      {/* {user !== null ? (
        <>
        <NavBar setUserState={() => setUser(null)}/>
        <Customer/>
        </>
      ) : (
         <>
         {toggleForm ? (<Login loggedIn={(user) => setUser(user)} toggle={() => formMode()}/>) 
         : ( <SignUp toggle={() => formMode()}/>)}
        
     </>
      )}  */}
    </>
      
       



      </Router>
    </>
  )
};

export default App; 