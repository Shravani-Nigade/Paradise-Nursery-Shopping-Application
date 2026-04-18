import React, { useState } from "react";
import ProductList from "./ProductList";
import AboutUs from "./AboutUs";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import "./App.css";

function App() {
  const [showProducts, setShowProducts] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const cart = useSelector((state) => state.cart);

  // ✅ Correct functionality (no alert)
  const handleGetStarted = () => {
    setShowProducts(true);
  };

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="App">
      {!showProducts ? (
        /* 🌿 LANDING PAGE */
        <div className="landing">
          <h1>🌿 Paradise Nursery</h1> {/* REQUIRED */}
          
          <AboutUs />

          <button onClick={handleGetStarted}>
            Get Started
          </button>
        </div>
      ) : (
        <>
          {/* 🌿 NAVBAR */}
          <h1>🌿 Paradise Nursery</h1>

          <div className="navbar">
            <button onClick={() => setShowCart(false)}>Products</button>
            <button onClick={() => setShowCart(true)}>
              Cart ({cart.length})
            </button>
          </div>

          {/* 🌿 CONDITIONAL RENDER */}
          {!showCart ? (
            <ProductList />
          ) : (
            <div>
              <h2>Your Cart 🛒</h2>

              {cart.length === 0 ? (
                <p>Cart is empty</p>
              ) : (
                cart.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))
              )}

              <h3>Total Amount: ₹{totalAmount}</h3>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default App;
