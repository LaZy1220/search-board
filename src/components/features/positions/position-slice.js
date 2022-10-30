import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loadPositions = createAsyncThunk(
  "@@positions/load-positions",
  async (_, { dispatch }) => {
    const res = await axios.get("https://makser-test.site/api/v1/work/");
    dispatch(setPositions(res.data));
  }
);

const positionSlice = createSlice({
  name: "@@positions",
  initialState: [],
  reducers: {
    setPositions: (state, action) => {
      state.positions = action.payload;
    },
  },
});
export const positionReducer = positionSlice.reducer;
export const { setPositions } = positionSlice.actions;

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
