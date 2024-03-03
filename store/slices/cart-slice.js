// createslice
// initialize initial state
// slice -> name, mention initial state, actions

import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

// 處理購物車相關的狀態，一個slice可以包含多個reducer函式，每個函式都負責處理特定的動作類型
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      console.log(action);
      state.push(action.payload);
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
