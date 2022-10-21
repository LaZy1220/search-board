import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: {},
    isAuth: false,
  },
  reducers: {
    setUser: () => {
      return {
        ...state,
        currentUser: action.payload,
        isAuth: true,
      };
    },
  },
});
