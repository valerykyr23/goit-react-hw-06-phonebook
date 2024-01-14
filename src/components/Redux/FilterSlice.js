import { createSlice } from "@reduxjs/toolkit";


export const FilterSlice = createSlice({
    name: 'filter',
    initialState: "",
    reducers: {
        filterContacts: (state,action) =>  {}
    }
})

export const  { filterContacts } = FilterSlice.actions;