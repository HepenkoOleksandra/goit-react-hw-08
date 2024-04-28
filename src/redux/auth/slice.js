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
  loading: false,
  error: false,
}

const authSlice = createSlice({
  name: "auth",
  initialState: INITAL_STATE,
  reducers: {},
  extraReducers: (builder) => builder
    .addCase(apiRegister.fulfilled, (state, action) => { //1
      // console.log(action);
      state.loading = false;
      state.isLoggedIn = true;
      state.user.name = action.payload.user.name;
      state.user.email = action.payload.user.email;
      state.token = action.payload.token;
    })
    .addCase(apiLogin.fulfilled, (state, action) => { // 2
        //  console.log(action.payload);
      state.loading = false;
      state.isLoggedIn = true;
      state.user.name = action.payload.user.name;
      state.user.email = action.payload.user.email;
      state.token = action.payload.token;
    })
      .addCase(apiLogout.fulfilled, (state, action) => { // 3
         state.loading = false;
      state.items = action.payload; 
      })
    .addCase(apiRefreshUser.fulfilled, (state, action) => { // 4
        console.log(action.payload);  
      state.loading = false;
      state.isLoggedIn = true;
      state.user.name = action.payload.name;
      state.user.email = action.payload.email;
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

export const authReducer = authSlice.reducer;