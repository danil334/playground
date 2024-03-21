import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: {d1: "", d2: ""}
}

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setValue1: (state, action) => {
            state.value.d1 = action.payload
        },
        setValue2: (state, action) => {
            state.value.d2 = action.payload
        }
    }
})

export const { setValue1, setValue2 } = dataSlice.actions;

export default dataSlice.reducer;