import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loadPositions = createAsyncThunk(
  "@@positions/load-positions",
  async () => {
    return axios.get("https://makser-test.site/api/v1/work/");
  }
);
const initialState = {
  status: "idle",
  list: [],
  error: null,
};
const positionSlice = createSlice({
  name: "@@positions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadPositions.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loadPositions.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload || action.meta.error;
      })
      .addCase(loadPositions.fulfilled, (state, action) => {
        state.status = "received";
        state.list = action.payload.data.results;
      });
  },
});
export const positionReducer = positionSlice.reducer;
export const selectAllPositions = (state) => state.positions;
// export const selectVisiblePositions = (state, filters = []) => {
//   if (filters.length === 0) {
//     return state.positions;
//   }
//   return state.positions.filter((pos) => {
//     const positionsFilters = [].concat(
//       ...pos.languages,
//       ...pos.tools,
//       pos.position.role,
//       pos.position.level
//     );
//     return filters.every((filter) => positionsFilters.includes(filter));
//   });
// };
