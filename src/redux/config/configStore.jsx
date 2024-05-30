import { configureStore } from "@reduxjs/toolkit";
import expensesReducer from "../slices/expensesSlice";

const store = configureStore({
  //리듀서랑 연결
  reducer: {
    expenses: expensesReducer,
  },
});

export default store;
