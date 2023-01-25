import React, { useState } from "react";
import "./card.css";

export default function Card({ product }) {
  //local state
  const [show, setShow] = useState(false);

  return (
    <div className="cardContainer">
      <img className="cardImg" src={product.image} alt="product img" />
      <div className="cardInfo">
        <div className="band">
          <div className="left">
            <span className="price">${product.price}</span>
            <span className="cardCatagory">{product.category}</span>
          </div>
          <div className="right">
            <div className={product.rating.rate > 3 ? `green` : "yellow"}>
              {`rating: ${product.rating.rate}/5`}
            </div>
            <div className="review">reviews: {product.rating.count}</div>
          </div>
        </div>
        <h3 className="cardTitle">{product.title}</h3>
        <div className="dec">
          {!show ? (
            <>
              <p>{product.description.slice(0, 150)}</p>
              {
                <button className="cardbtn" onClick={() => setShow(true)}>
                  {product.description.length > 150 ? <i>read more</i> : null}
                </button>
              }
            </>
          ) : (
            <>
              <p>{product.description}</p>
              <button className="cardbtn" onClick={() => setShow(false)}>
                <i>show less</i>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
