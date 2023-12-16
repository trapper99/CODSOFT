import { createSlice } from '@reduxjs/toolkit';
import 

const boardsSlice = createSlice({
    name: "boards",
    initialState: {},
    reducers: {
        addBoard: (state, action) => {
            const isActive = state.length > 0 ? false:true
        }
    }
})