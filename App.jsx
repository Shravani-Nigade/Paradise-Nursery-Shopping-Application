import React from "react";

const App = () => {
  const handleGetStarted = () => {
    // You can later connect this to navigation (React Router)
    alert("Welcome to Paradise Nursery!");
  };

  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>🌿 Paradise Nursery</h1>
        <p>Bring nature into your home with beautiful indoor plants</p>

        <button onClick={handleGetStarted}>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default App;
