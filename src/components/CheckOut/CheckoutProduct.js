import React from 'react';
import './CheckoutProduct.css'
import { ContextConsumer } from '../../AppContext'

const CheckoutProduct = ({ id, image, title, price, rating, hideButton }) => {

  const { state, setState } = ContextConsumer()

  const removeFromBasket = () => {
    const index = state.basket.findIndex(
      (basketItem) => basketItem.id === id
    );
    let newBasket = [...state.basket];

    if (index >= 0) {
      newBasket.splice(index, 1);
    } else {
      console.warn(
        `Cant remove product (id: ${id}) as its not in basket!`
      )
    }
    setState({
    	...state,
      basket: newBasket
    })
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
                  <p>🌟</p>
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
