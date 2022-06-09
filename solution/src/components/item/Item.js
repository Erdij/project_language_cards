import "./item.css";
import React, { useState } from "react";

const Item = ({ card }) => {
  const [showLogo, setShowLogo] = useState(true);
   if (!showLogo) {
    setTimeout(() => {
      setShowLogo(true);
    }, 5000);
  }
  return (
    <div className="card" onClick={() => setShowLogo(!showLogo)}>
      {showLogo ? (
        <div>
          <img className="card-logo" src={card.img} alt="logo" />
          <h3 className="card-title">{card.name}</h3>
        </div>
      ) : (
        <ul className="list">
          {card.options.map((element, index) => {
            return <li key={index}>{element}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default Item;
