import { createSlice } from "@reduxjs/toolkit";

const INITAL_STATE = {
    items: [],
}

const contactSlice = createSlice({
  name: "contacts",
  initialState: INITAL_STATE,
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },
    deleteContact(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
  },
  // selectors: {
  //   selectContacts: state => state.items
  // },
})

 export const selectContacts = state => state.contacts.items;
// export const { selectContacts } = contactSlice.selectors;

export const { addContact, deleteContact } = contactSlice.actions;

export const contactsReducer = contactSlice.reducer;
