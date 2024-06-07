import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      state.count++;
    },
    decrement: (state) => {
      state.count--;
    },
    reset: (state) => {
      state.count = 0;
    },
    multipleTwo: (state) => {
      state.count = state.count * 2;
    },
    divideTwo: (state) => {
      if (state.count != 0) {
        state.count = state.count / 2;
      }
    },
  },
});

export const { increment, decrement, multipleTwo, divideTwo, reset } = counterSlice.actions;

export const counterReducer = counterSlice.reducer;
