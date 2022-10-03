import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "./components/features/filter/filter-slice";
import { positionReducer } from "./components/features/positions/position-slice";

export const store = configureStore({
    reducer:{
         filters:filterReducer,
         positions:positionReducer,
    },
    devTools:true,
})