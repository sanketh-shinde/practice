import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
  quantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },
    remove: (state, action) => {
      return state.filter((product) => product.id !== action.payload);
    },
  },
});

export default cartSlice.reducer;
export const { add, remove } = cartSlice.actions;
