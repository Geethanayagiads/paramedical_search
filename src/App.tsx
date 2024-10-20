import React from "react";
import "./App.css"; // Assuming you're using external CSS for styling
import getServiceIcon from "./assets/get-service-icon.png"; // Import the "Get Service" icon
import offerServiceIcon from "./assets/offer-service-icon.png"; // Import the "Offer Service" icon
import logo from "./assets/freelancer-logo.png"; // Import the logo

const App: React.FC = () => {
  return (
    <div className="app-container">
      <header className="app-header">
        <img
          src={logo} // Use the imported logo
          alt="Freelancer Logo"
          className="app-logo"
        />
      </header>
      <main className="app-main">
        <h2>Select account type</h2>
        <p>Don't worry, this can be changed later.</p>
        <div className="app-options">
          {/* Link for "Get Service" */}
          <a href="search.html?serviceType=getService" className="app-option">
            <img
              src={getServiceIcon} // Use the imported "Get Service" icon
              alt="Get Service"
              className="app-icon"
            />
            <h3>Get Service</h3>
            <span className="app-arrow">→</span>
          </a>
          
          {/* Link for "Offer Service" */}
          <a href="index.html?serviceType=offerService" className="app-option">
            <img
              src={offerServiceIcon} // Use the imported "Offer Service" icon
              alt="Offer Service"
              className="app-icon"
            />
            <h3>Offer Service</h3>
            <span className="app-arrow">→</span>
          </a>
        </div>
      </main>
    </div>
  );
};

export default App;
