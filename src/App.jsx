import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="img-container">
        <img src="./images/image-product-desktop.jpg"></img>
      </div>
      <div className="row right">
        <h3>PERFUME</h3>
        <h1 class="title">Gabrielle Essence Eau De Parfum</h1>
        <p>
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <div className="pricing">
          <div className="saleprice">
            <h1>$149.99</h1>
          </div>
          <div className="retail">
            <s>$169.99</s>
          </div>
        </div>
        <button>🛒 Add to Cart</button>
      </div>
    </div>
  );
}

export default App;
