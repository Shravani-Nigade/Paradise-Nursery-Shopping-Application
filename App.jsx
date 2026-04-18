import React, { useState } from "react";
import ProductList from "./components/ProductList";

const App = () => {
  const [showProducts, setShowProducts] = useState(false);

  const handleGetStarted = () => {
    setShowProducts(true);
  };

  return (
    <div>
      {!showProducts ? (
        <div className="landing-page">
          <div className="landing-content">
            <h1>🌿 Paradise Nursery</h1>
            <p>Bring nature into your home with beautiful plants</p>

            <button onClick={handleGetStarted}>
              Get Started
            </button>
          </div>
        </div>
      ) : (
        <ProductList />
      )}
    </div>
  );
};

export default App;
