import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import bookReducer from "../slices/bookSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    book: bookReducer,
  },
});
