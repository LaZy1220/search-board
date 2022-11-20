import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "./components/features/filter/filter-slice";
import { positionReducer } from "./components/features/positions/position-slice";
import { combineReducers } from "@reduxjs/toolkit";
const rootReducer = combineReducers({
  filters: filterReducer,
  positions: positionReducer,
});

export const store = configureStore({
  reducer: {
    rootReducer,
  },
  devTools: true,
});
