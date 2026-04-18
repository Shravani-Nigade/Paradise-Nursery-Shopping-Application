import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],

  reducers: {
    // ✅ 1. Add Item
    addItem: (state, action) => {
      const existingItem = state.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },

    // ✅ 2. Remove Item
    removeItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },

    // ✅ 3. Update Quantity
    updateQuantity: (state, action) => {
      const { id, amount } = action.payload;

      const item = state.find((item) => item.id === id);

      if (item) {
        item.quantity += amount;

        // Prevent quantity from going below 1
        if (item.quantity <= 0) {
          return state.filter((i) => i.id !== id);
        }
      }
    },
  },
});

// ✅ Export actions
export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

// ✅ Export reducer
export default cartSlice.reducer;
