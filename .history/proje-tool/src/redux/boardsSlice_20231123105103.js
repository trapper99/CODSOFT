import { createSlice } from '@reduxjs/toolkit';
import data from ''

const boardsSlice = createSlice({
    name: "boards",
    initialState: {},
    reducers: {
        addBoard: (state, action) => {
            const isActive = state.length > 0 ? false:true
        }
    }
})