import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 0 }

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: { // reducer
        // action
        increment(state, action) {
            state.value++ //= action.payload
        }
    }
})

export const { increment } = counterSlice.actions // lay ra action

export default counterSlice.reducer // lay ra reducer
