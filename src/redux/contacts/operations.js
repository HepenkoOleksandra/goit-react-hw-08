import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiAddNewContact, apiDeleteContactById, apiRequestContactsAll } from "../../services/contactsApi";

export const fetchContacts = createAsyncThunk( //1
    "contacts/fetchAll",
    async (_, thunkAPI) => {
        try {
            const data = await apiRequestContactsAll();
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const addContact = createAsyncThunk( //2
    "contacts/addContact",
    async (contact, thunkAPI) => {
        try {
            const data = await apiAddNewContact(contact);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const deleteContact = createAsyncThunk( //3
    "contacts/deleteContact",
    async (contactId, thunkAPI) => {
        try {
            const data = await apiDeleteContactById(contactId);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message); 
        }
    }
)