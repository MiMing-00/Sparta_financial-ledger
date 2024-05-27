import { configureStore } from "@reduxjs/toolkit";
import React from "react";

// 컨피그 스토어 {}, 리듀서라는 키 안에 또 {}
const store = configureStore({
  reducer: {
    expense: expenseSlice,
    // 다른 슬라이스가 있으면 추가하기
  },
});

export default store;
