import React, { useState } from "react";
import "./Phials.css";
import bottle1a from "../images/bottle1a.png";

const Phials = (props) => {
  const [count, setCount] = useState(0);

  const addToCart = () =>
    setTimeout(() => setCount((currentCount) => currentCount + 1), 250);
  const removeFromCart = () =>
    setTimeout(() => setCount((currentCount) => currentCount - 1), 250);
  return (
    <div className="phials">
      <h3>{props.name}</h3>
      <h3>{props.description}</h3>
      <h3>{props.image}</h3>
      <img class="image1" src={bottle1a} alt="Perfume Bottle" />
      <h3>
        {props.prefix}
        {props.price}
      </h3>
      <h4>{count}</h4>
      <button className="btn1" onClick={addToCart}>
        +
      </button>
      <button className="btn1" onClick={removeFromCart}>
        -
      </button>
    </div>
  );
};
export default Phials;
