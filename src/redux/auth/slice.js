import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { apiLogin, apiLogout, apiRefreshUser, apiRegister } from "./operations";

const INITAL_STATE = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
}

const authSlice = createSlice({
  name: "auth",
  initialState: INITAL_STATE,
  reducers: {},
  extraReducers: (builder) => builder
    .addCase(apiRegister.fulfilled, (state, action) => { //1
      state.loading = false;
      state.items = action.payload;
    })
      .addCase(apiLogin.fulfilled, (state, action) => { // 2
        state.loading = false;
      state.items = action.payload;
      })
      .addCase(apiLogout.fulfilled, (state, action) => { // 3
         state.loading = false;
      state.items = action.payload; 
      })
      .addCase(apiRefreshUser.fulfilled, (state, action) => { // 4
          state.loading = false;
      state.items = action.payload;
      })
      
    
    .addMatcher(isAnyOf(apiRegister.pending, apiLogin.pending, apiLogout.pending, apiRefreshUser.pending), (state) => {
      state.loading = true;
      state.error = false;
    })
    .addMatcher(isAnyOf(apiRegister.rejected, apiLogin.rejected, apiLogout.rejected, apiRefreshUser.rejected), (state) => {
      state.loading = false;
      state.error = true;
    })
})

export const aythReducer = authSlice.reducer;