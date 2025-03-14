import React from "react";
import PayPalButton from "./PaypalButton";
export default function CartTotals({ value, history }) {
  const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
            <h5>
              <span className="text-title">subtotal : </span>
              <strong>$ {cartSubTotal}</strong>
            </h5>
            <h5>
              <span className="text-title">tax : </span>
              <strong>$ {cartTax}</strong>
            </h5>
            <h5>
              <span className="text-title">total : </span>
              <strong>$ {cartTotal}</strong>
            </h5>
            {process.env.REACT_APP_APP_ID ?
              <PayPalButton
                total={cartTotal}
                clearCart={clearCart}
                history={history}
              /> : null
            }

          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
