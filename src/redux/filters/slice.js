import { createSlice } from "@reduxjs/toolkit";

const INITAL_STATE = {
  name: "",
}

const filterSlice = createSlice({
  name: "filters",
  initialState: INITAL_STATE,
  reducers: {
    setFilter(state, action) {
      state.name = action.payload
    },
  },
});


export const { setFilter } = filterSlice.actions;

export const filtersReducer = filterSlice.reducer;