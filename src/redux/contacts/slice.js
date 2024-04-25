import { createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./operations";
// import { selectNameFilter } from "../filters/slice";

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
    .addCase(fetchContacts.pending, (state) => {
      state.loading = true;
      state.error = false;
    })
    .addCase(fetchContacts.fulfilled, (state, action) => {
      state.loading = false;
      state.items = action.payload;
    }).addCase(fetchContacts.rejected, (state) => {
      state.loading = false;
      state.error = true;
    })
    .addCase(deleteContact.pending, (state) => {
      state.loading = true;
      state.error = false;
    })
    .addCase(deleteContact.fulfilled, (state, action) => {
      state.loading = false;
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    })
    .addCase(deleteContact.rejected, (state) => {
      state.loading = false;
      state.error = true;
    })
    .addCase(addContact.pending, (state) => {
      state.loading = true;
      state.error = false;
    })
    .addCase(addContact.fulfilled, (state, action) => {
      state.loading = false;
      state.items.push(action.payload);
    })
    .addCase(addContact.rejected, (state) => {
      state.loading = false;
      state.error = true;
    })
})

export const contactsReducer = contactSlice.reducer;