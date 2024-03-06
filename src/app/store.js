import { configureStore } from "@reduxjs/toolkit";
import countersReducer from "../features/counters/countersSlice";

const store = configureStore({
  reducer: {
    counters: countersReducer,
    //  videos:videosReducer
  },
});
export default store;

/*
Here we will add all the features 
*/
