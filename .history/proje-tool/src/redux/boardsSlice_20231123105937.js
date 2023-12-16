import { createSlice } from '@reduxjs/toolkit';
import data from '../data.json';

const boardsSlice = createSlice({
    name: "boards",
    initialState: data.boards,
    reducers: {
        addBoard: (state, action) => {
            const isActive = state.length > 0 ? false:true;
            const payload = action.payload;
            const board = {
                name: payload.name,
                isActive,
                columns: [],
            };
            board.columns = payload.newColumns;
            state.push(board);
        },
        editBoard: (state, action) => {
            const payload = action.payload;
            const board = state.find((board) => board.)
        }
    }
})