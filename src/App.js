import React, { useEffect } from 'react'
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from './Orders';

const promise = loadStripe(
  "pk_test_51Koc2uBzyqf1mpBTCAtbkzNS4YdOm6hr7FMXrPwQicMV7sOrCCpK1JnaiDwSUnJeZnb86R5jje6C5HqPwuHWUqqS004auGM8A8"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    //BEM
    <Router>
      <div className="app">
        <Routes>
          <Route path="/checkout" element={[<Header />, <Checkout />]}/>
          <Route path="/" element={[ <Header />, <Home />]}/>
          <Route path="/login" element={[ <Login />]}/>
          <Route path="/payment" element={[ <Header />, <Elements stripe={promise}> <Payment /> </Elements>]}/>
          <Route path="/orders" element={[<Header />, <Orders />]}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;