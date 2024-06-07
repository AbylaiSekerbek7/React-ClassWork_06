import { configureStore } from "@reduxjs/toolkit";
import axios from "axios";
import { counterReducer } from "./counterSlice";
import { postReducer } from "./postSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    post: postReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: {
          extraArgument: axios,
      },
  }),
});
