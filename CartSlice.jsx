import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: []
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    
    // ➕ Add item to cart
    addItem: (state, action) => {
      const item = state.items.find(
        (plant) => plant.id === action.payload.id
      );

      if (item) {
        item.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },

    // ❌ Remove item from cart
    removeItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );
    },

    // 🔢 Update quantity of item
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;

      const item = state.items.find((plant) => plant.id === id);

      if (item) {
        item.quantity = quantity;
      }
    }
  }
});

export const { addItem, removeItem, updateQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
