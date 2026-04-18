import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateQuantity, removeItem } from "./CartSlice";

function CartItem() {
  const dispatch = useDispatch();

  // ✅ Get full cart
  const cart = useSelector((state) => state.cart);

  // ✅ Calculate total cart amount
  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h2>🛒 Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">

              {/* ✅ Image */}
              <img
                src={item.image}
                alt={item.name}
                className="cart-img"
              />

              {/* ✅ Details */}
              <div className="cart-details">
                <h4>{item.name}</h4>
                <p>Unit Price: ₹{item.price}</p>
                <p>Quantity: {item.quantity}</p>

                {/* ✅ Total per item */}
                <p>
                  Total: ₹{item.price * item.quantity}
                </p>

                {/* ✅ Quantity Controls */}
                <button
                  onClick={() =>
                    dispatch(updateQuantity({ id: item.id, amount: 1 }))
                  }
                >
                  +
                </button>

                <button
                  onClick={() =>
                    dispatch(updateQuantity({ id: item.id, amount: -1 }))
                  }
                >
                  -
                </button>

                {/* ✅ Remove Button */}
                <button
                  onClick={() => dispatch(removeItem(item.id))}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* ✅ Total Cart Amount */}
          <h3>Total Cart Amount: ₹{totalAmount}</h3>
        </>
      )}
    </div>
  );
}

export default CartItem;
