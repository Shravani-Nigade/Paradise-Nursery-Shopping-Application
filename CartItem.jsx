import React from "react";
import { useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../features/CartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(
      updateQuantity({ id: item.id, quantity: item.quantity + 1 })
    );
  };

  const handleDecrease = () => {
    if (item.quantity > 1) {
      dispatch(
        updateQuantity({ id: item.id, quantity: item.quantity - 1 })
      );
    }
  };

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />

      <div>
        <h3>{item.name}</h3>
        <p>₹{item.price}</p>

        <div className="qty-controls">
          <button onClick={handleDecrease}>-</button>
          <span>{item.quantity}</span>
          <button onClick={handleIncrease}>+</button>
        </div>

        <button
          onClick={() => dispatch(removeItem(item.id))}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
