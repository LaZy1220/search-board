import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  positions: [],
};
export const queryPositions = createAsyncThunk(
  "@@position/queryPositions",
  async (_, { rejectWithValue, dispatch }) => {
    const response = await axios.get("https://makser-test.site/api/v1/work/");
    dispatch(addPositions(response.data.results));
  }
);
const positionSlice = createSlice({
  name: "@@positions",
  initialState,
  reducers: {
    addPositions: (state, action) => {
      state.positions = action.payload;
    },
  },
  extraReducers: {
    [queryPositions.fulfilled]: () => console.log("fulfilled"),
    [queryPositions.pending]: () => console.log("pending"),
    [queryPositions.rejected]: () => console.log("rejected"),
  },
});

export const { addPositions } = positionSlice.actions;
export const positionReducer = positionSlice.reducer;

export const selectAllPositions = (state) => state.positions;
export const selectVisiblePositions = (state, filters = []) => {
  if (filters.length === 0) {
    return state.positions;
  }
  return state.positions.filter((pos) => {
    const positionsFilters = [].concat(
      ...pos.languages,
      ...pos.tools,
      pos.position.role,
      pos.position.level
    );
    return filters.every((filter) => positionsFilters.includes(filter));
  });
};
