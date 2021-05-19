 import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useHistory } from "react-router-dom";
import { ContextConsumer } from "../../AppContext";

const Subtotal = () => {

  const history = useHistory();
  const { state } = ContextConsumer();

  const getTotalPrice = () => {
    let price = 0;
    state.basket.map(item => {
      price += item.price
    })
    return price
  }

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({state.basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getTotalPrice()}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={() => history.push('/payment')}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
