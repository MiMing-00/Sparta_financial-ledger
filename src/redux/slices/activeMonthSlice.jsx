import { createSlice } from "@reduxjs/toolkit";

const initialMonth = localStorage.getItem("selectedMonth")
  ? parseInt(localStorage.getItem("selectedMonth"))
  : 1;

const activeMonthSlice = createSlice({
  name: "activeMonth",
  initialState: { activeMonth: initialMonth },
  reducers: {
    setActiveMonth: (state, action) => {
      return action.payload;
    },
  },
});

export const { setActiveMonth } = activeMonthSlice.actions;
export default activeMonthSlice.reducer;
