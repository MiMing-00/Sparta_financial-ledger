import { configureStore } from "@reduxjs/toolkit";
import React from "react";

// 컨피그 스토어 {}, 리듀서라는 키 안에 또 {}
const store = configureStore({
  reducer: {
    expense: expenseSlice,
  },
});

export default store;
