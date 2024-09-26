const { createSlice } = require("@reduxjs/toolkit");
const { cakeActions } = require("../cake/cakeSlice");

const initialState = {
  numOfIcecreams: 20,
};

const iceCreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIcecreams--;
    },
    restock: (state, action) => {
      state.numOfIcecreams += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(cakeActions.ordered, (state) => {
      state.numOfIcecreams--;
    });
  },
  //   extraReducers: {
  //     ["cake/ordered"]: (state, action) => {
  //       state.numOfIcecreams--;
  //     },
  //   },
});

module.exports = iceCreamSlice.reducer;
module.exports.iceCreamActions = iceCreamSlice.actions;
