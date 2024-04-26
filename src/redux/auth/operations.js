import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiCreateNewUser, apiGetInformationCurrentUser, apiLogOutUser, apiLoginUser } from "../../services/contactsApi";
// import { apiAddNewContact, apiDeleteContactById, apiGetAllContacts } from "../../services/contactsApi";

export const apiRegister = createAsyncThunk( //1
    "auth/register",
    async (formData, thunkAPI) => {
        try {
            const data = await apiCreateNewUser(formData);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const apiLogin = createAsyncThunk( //2
    "auth/login",
    async (formData, thunkAPI) => {
        try {
            const data = await apiLoginUser(formData);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const apiLogout = createAsyncThunk( //3
    "auth/logout",
    async (_, thunkAPI) => {
        try {
            const data = await apiLogOutUser();
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message); 
        }
    }
)

export const apiRefreshUser = createAsyncThunk( //4
    "auth/refresh",
    async (_, thunkAPI) => {
        try {
            const data = await apiGetInformationCurrentUser();
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message); 
        }
    }
)