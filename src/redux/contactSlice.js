import { createSlice } from "@reduxjs/toolkit";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const initialState = { contacts: [] };

const contactSlice = createSlice({
    name: 'contacts',
    initialState: initialState,
    reducers: {
        addContact: (state, action)=> {
if (state.contacts.some(contact=>contact.name===action.payload.name)) {
      Notify.warning(`${action.payload.name} is already in contacts`)
      return;
    }
            return {
    contacts: [action.payload, ...state.contacts ]
} 
        },
        deleteContact:(state, action) =>{
           return {contacts: state.contacts.filter(contact=>contact.id !== action.payload)}
        },
    },

});

export const { addContact, deleteContact } = contactSlice.actions;
export const contactReduser = contactSlice.reducer;

