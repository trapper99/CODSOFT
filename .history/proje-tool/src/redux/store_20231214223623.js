import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-"
import boardsSlice from "./boardsSlice";

const store = configureStore({
    reducer: {
        boards: boardsSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat()
})

export default store;