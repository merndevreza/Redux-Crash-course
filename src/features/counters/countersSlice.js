import { createSlice } from "@reduxjs/toolkit";
const initialState = [
  {
    id: 1,
    value: 0,
  },
  {
    id: 2,
    value: 0,
  },
];
const countersSlice = createSlice({
  name: "counters",
  initialState,
  reducers: {
    increment: (state, action) => {
      const counterIndex = state.findIndex(
        (counter) => counter.id === action.payload
      );
      state[counterIndex].value++;
    },
    decrement: (state, action) => {
      const counterIndex = state.findIndex(
        (counter) => counter.id === action.payload
      );
      state[counterIndex].value--;
    },
  },
});
export default countersSlice.reducer;
export const { increment, decrement } = countersSlice.actions;

/* Steps:
1. Create a slice by using createSlice(), and give a name, initial data and reducer functions.

2. Write the functions inside reducers. Here we can mutate state because Redux is using immer for compilation.

3. export countersSlice.reducer and countersSlice.actions
*/
