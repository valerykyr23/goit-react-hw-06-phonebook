import { createSlice } from "@reduxjs/toolkit";

const contactsInitialState = { items: [] };

export const ContactsSlice = createSlice({
    name: 'phone',
    initialState: contactsInitialState,
    reducers: {

        addContact: (state, action) => { state.items.push(action.payload)},
        deleteContact: (state, action) => { state.items = state.items.filter(item => item.id !== action.payload) }

    },
})

export const { addContact, deleteContact } = ContactsSlice.actions;
export const { contactsReducer } = ContactsSlice.reducer;

