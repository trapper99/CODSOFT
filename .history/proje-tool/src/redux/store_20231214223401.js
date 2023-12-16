import { configureStore } from "@reduxjs/toolkit";
import boardsSlice from "./boardsSlice";

const store = configureStore({
    reducer: {
        boards: boardsSlice.reducer,
    },
    middleware: (getDefaultM)
})

export default store;