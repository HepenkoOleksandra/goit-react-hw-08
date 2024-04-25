import axios from 'axios';

const instance = axios.create({
  baseURL: "https://6627c04fb625bf088c099905.mockapi.io",
    headers: {},
    params: {}
});

export const apiRequestContactsAll = async () => {
  const {data} = await instance.get("/contacts")
// console.log(data.results);
  return data;
};

export const apiAddNewContact = async (contact) => {
  const {data} = await instance.post("/contacts", contact)
// console.log(data.results);
  return data;
};

export const apiDeleteContactById = async (contactId) => {
    const {data} = await instance.delete(`/contacts/${contactId}`);
// console.log("1", data);
  return data;
};