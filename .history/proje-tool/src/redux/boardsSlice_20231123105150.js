import { createSlice } from '@reduxjs/toolkit';
import data from '../data.json';

const boardsSlice = createSlice({
    name: "boards",
    initialState: data.bo,
    reducers: {
        addBoard: (state, action) => {
            const isActive = state.length > 0 ? false:true
        }
    }
})