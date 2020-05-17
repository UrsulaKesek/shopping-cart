import React from "react";
import "./App.css";
import Perfumes from "./components/Perfumes";
import Cart from "./components/Cart";
import CartProvider from "./components/CartProvider";

function App() {
  return (
    <CartProvider>
      <div className="app">
        <h1> Scent Explorers</h1>
        <Perfumes />
        <Cart />
      </div>
    </CartProvider>
  );
}

export default App;
