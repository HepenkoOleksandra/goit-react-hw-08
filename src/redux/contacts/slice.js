import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./operations";

const INITAL_STATE = {
    items: [],
    loading: false,
    error: null,
}

const contactSlice = createSlice({
  name: "contacts",
  initialState: INITAL_STATE,
  reducers: {},
  extraReducers: (builder) => builder
    .addCase(fetchContacts.fulfilled, (state, action) => { //1
      state.loading = false;
      state.items = action.payload;
    })
    .addCase(addContact.fulfilled, (state, action) => { //2
      state.loading = false;
      state.items.push(action.payload);
    })
    .addCase(deleteContact.fulfilled, (state, action) => { // 3
      state.loading = false;
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    })   

    .addMatcher(isAnyOf(fetchContacts.pending, addContact.pending, deleteContact.pending),  (state) => {
      state.loading = true;
      state.error = false;
    })
    .addMatcher(isAnyOf(fetchContacts.rejected, addContact.rejected, deleteContact.rejected), (state) => {
      state.loading = false;
      state.error = true;
    })
})

export const contactsReducer = contactSlice.reducer;