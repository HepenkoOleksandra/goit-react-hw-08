import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiCreateNewUser, apiGetInformationCurrentUser, apiLogOutUser, apiLoginUser, setToken } from "../../services/contactsApi";

export const apiRegister = createAsyncThunk( //1
    "auth/register",
    async (formData, thunkAPI) => {
        try {
            const data = await apiCreateNewUser(formData);
            // console.log(data);
            setToken(data.token);
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
            // console.log(data);
            setToken(data.token);
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
            const state = thunkAPI.getState();
            const token = state.auth.token;
            // if(!token) return;
            setToken(token);

            const data = await apiGetInformationCurrentUser();
            console.log(data);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message); 
        }
    }
)