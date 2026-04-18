import React from "react";
import { useDispatch } from "react-redux";
import { increment, decrement, removeFromCart } from "./CartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <h4>{item.name}</h4>
      <p>Price: ₹{item.price}</p>
      <p>Quantity: {item.quantity}</p>
      <p>Total: ₹{item.price * item.quantity}</p>

      <button onClick={() => dispatch(increment(item.id))}>+</button>
      <button onClick={() => dispatch(decrement(item.id))}>-</button>
      <button onClick={() => dispatch(removeFromCart(item.id))}>
        Remove
      </button>
    </div>
  );
}

export default CartItem;
