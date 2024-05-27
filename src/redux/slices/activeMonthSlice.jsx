import { createSlice } from "@reduxjs/toolkit";

// const { activeIndex, setActiveIndex } = useContext(ExpenseContext);

const initialMonth = localStorage.getItem("selectedMonth")
  ? parseInt(localStorage.getItem("selectedMonth")) - 1
  : 1;

const activeMonthSlice = createSlice({
  name: "activeMonth",
  initialState: initialMonth,
  reducers: {
    setActiveMonth: (state, action) => {
      return action.payload;
    },
  },
});

export const { setActiveMonth } = activeMonthSlice.actions;
export default activeMonthSlice.reducer;
