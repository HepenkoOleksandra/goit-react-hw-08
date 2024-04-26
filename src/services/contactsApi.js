import axios from 'axios';

const instance = axios.create({
  baseURL: "https://connections-api.herokuapp.com",
    headers: {},
    params: {}
});

export const setToken = (token) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () =>
  (instance.defaults.headers.common.Authorization = "");

//User
export const apiCreateNewUser = async (formData) => { // 1
  const { data } = await instance.post("/users/signup", formData);
  return data;
};

export const apiLoginUser = async (formData) => { // 2
  const { data } = await instance.post("/users/login", formData);
  return data;
};

export const apiLogOutUser = async () => { // 3
  const { data } = await instance.post("/users/logout");
  return data;
};

export const apiGetInformationCurrentUser = async () => { // 4
  const { data } = await instance.post("/users/current");
  return data;
};

//Contact
export const apiGetAllContacts = async () => { // 1
  const { data } = await instance.get("/contacts");
  return data;
};

export const apiAddNewContact = async (contact) => { // 2
  const { data } = await instance.post("/contacts", contact);
  return data;
};

export const apiDeleteContactById = async (contactId) => {
  const {data} = await instance.delete(`/contacts/${contactId}`);
  return data;
};

export const apiUpdateContact = async (contactId) => {
  const {data} = await instance.patch(`/contacts/${contactId}`);
  return data;
};