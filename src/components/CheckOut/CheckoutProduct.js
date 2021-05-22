import React from 'react';
import './CheckoutProduct.css'
import { ContextConsumer } from '../../AppContext'

const CheckoutProduct = ({ id, image, title, price, rating, hideButton }) => {

  const { basket, setBasket } = ContextConsumer()

  const removeFromBasket = () => {
    const index = basket.findIndex(
      (basketItem) => basketItem.id === id
    );
    let newBasket = [...basket];

    if (index >= 0) {
      newBasket.splice(index, 1);
    } else {
      console.warn(
        `Cant remove product (id: ${id}) as its not in basket!`
      )
    }
    setBasket(newBasket)
  }

  return (
    <div className='checkoutProduct'>
      <div className='checkoutProduct__image'>
        <img src={image} alt={title}/>
      </div>
      <div className='checkoutProduct__info'>
          <p className='checkoutProduct__title'>{title}</p>
          <p className="checkoutProduct__price">
              <small>$</small>
              <strong>{price}</strong>
          </p>
          <div className="checkoutProduct__rating">
              {Array(rating)
              .fill()
              .map((_, i) => (
                  <p key={i}>🌟</p>
              ))}
          </div>
          {!hideButton && (
              <button onClick={removeFromBasket}>Remove from Basket</button>
          )}
      </div>
    </div>
  )
}

export default CheckoutProduct
