import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import { openModal } from "../features/modal/modalSlice";

import React from "react";

const CartContainer = () => {
  const dispatch = useDispatch();
  const { cartItems, total, amount } = useSelector((store) => store.cart);

  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
        {amount < 1 && <h4 className="empty-cart">your bag is empty</h4>}
      </header>
      {amount > 0 && (
        <>
          <div>
            {cartItems.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
          </div>

          <footer>
            <hr />
            <div className="cart-total">
              <h4>
                total<span>${total.toFixed(2)}</span>
              </h4>
            </div>
            <button
              className="btn clear-btn"
              onClick={() => dispatch(openModal())}
            >
              clear cart
            </button>
          </footer>
        </>
      )}
    </section>
  );
};

export default CartContainer;
