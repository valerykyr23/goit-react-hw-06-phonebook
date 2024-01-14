import { createSlice } from "@reduxjs/toolkit";


export const FilterSlice = createSlice({
    name: 'filter',
    initialState: " ",
    reducers: {

        filterContacts: (state, action) =>  { return action.payload}
    }
})

export const { filterContacts } = FilterSlice.actions;
export const { filterReducer } = FilterSlice.reducer;