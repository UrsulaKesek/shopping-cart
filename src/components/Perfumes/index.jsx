import React from "react";
import "./Perfumes.css";
import Phials from "../Phials";
const Perfumes = () => {
  const database = [
    {
      name: "Poets of Berlin",
      description: "A complex blend of: Green Wild Orris/Blueberry/Lemon/Vetiver/Vanilla/Sandalwood",
      image :"src",
      prefix: "£",
      price: 185.00,
      quantity:0,
      id: 1,
    },
    
    {
      name: "Toamasina Ensemble",
      description: "An Island blend of:Grapefruit/Cardomom/Vetiver/Vanilla",
      image :"src",
      prefix: "£",
      price: 150.00,
      quantity: 0,
      id: 2,
    },
    {
      name: "Basso Continuo in Noto",
      description: "A chamber blend of:Marsala Cask Whisky/Sandalwood/Vetiver/Leather",
      image:"src",
      prefix: "£",
      price: 180.00,
      quantity: 0,
      id: 3,
    },
    {
      name: "Jazz New York",
      description: "A classic blend of:Patchouli/Cedar/Lime",
      image:"src",
      prefix: "£",
      price: 180.00,
      quantity: 0,
      id: 4,
    },
  ];
  return (
    <div className="scents">
      <h2 className="dbtitle">Scent Sensations</h2>
      {database.map((item) => (
        <Phials
          name={item.name}
          image ={item.img}
          prefix={item.prefix}
          price={item.price}
          description={item.description}
          quantity={item.quantity}
          key={item.id}
        />
      ))}
    </div>
  );
};

export default Perfumes;
