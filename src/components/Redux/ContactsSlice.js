import { createSlice } from "@reduxjs/toolkit";



export const ContactsSlice = createSlice({
    name: 'contacts',
    initialState: [],
    reducers: {

        addContact: (state, action) => { state.push(action.payload)},
        deleteContact: (state, action) => { state.filter(item => item.id !== action.payload) }

    },
})

export const { addContact, deleteContact } = ContactsSlice.actions;

