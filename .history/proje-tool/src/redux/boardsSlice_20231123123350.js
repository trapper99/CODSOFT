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
            const board = state.find((board) => board.isActive);
            board.name = payload.name;
            board.columns = payload.newColumns;
        },
        deleteBoard: (state, action) => {
            const payload = action.payload;
            const board = state.find((board) => board.isActive);
            board.name = payload.newColumns; 
        },
        setBoardActive: (state, action) => {
            state.map((board, index) => {
                index === action.payload.index
                  ? (board.isActive = true)
                  : (board.isActive = false);
                return board;  
            });
        },
        addTask: (state, action) => {
            const {
                title,
                status,
                description,
                subtasks,
                prevColIndex,
                newColIndex,
                taskIndex,
            } = action.payload;
            const board = state.find((board) => board.isActive);
            const column = board.columns.find((col, index) => index === prevColIndex);
            const task = column.tasks.find((task, index) => index === taskIndex);
            task.title = title;
            task.status = status;
            task.description = description;
            task.subtasks = subtasks;
            if (prevColIndex === newColIndex) return;
            column.tasks = column.tasks.filter((task, index) => index !== taskIndex);
            const newCol = board.columns.find((col, index) => index === newColIndex);
        }
    }
})