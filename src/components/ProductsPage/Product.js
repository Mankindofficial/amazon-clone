import React from "react";
import "./Product.css";
import { ContextConsumer } from "../../AppContext";

function Product({ id, title, image, price, rating }) {

  const { state, setState } = ContextConsumer();

  const addToBasket = () => {
    setState({
      ...state,
      basket: [
        ...state.basket, 
        {
          id: id,
          title: title,
          image: image,
          price: price,
          rating: rating,
        }
      ]
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>
      <div className="product__image">
        <img src={image} alt={title} />
      </div>
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
