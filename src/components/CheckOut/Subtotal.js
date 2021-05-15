import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useHistory } from "react-router-dom";
import { ContextConsumer } from "../../AppContext";

const Subtotal = () => {

  const history = useHistory();
  const { state } = ContextConsumer();

  const getBasketTotal = (basket) => {
    basket?.reduce((amount, item) => item.price + amount, 0)
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
        value={getBasketTotal(state.basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={() => history.push('/payment')}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
