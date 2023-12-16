import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import boardsSlice from "./boardsSlice";

const store = configureStore({
    reducer: {
        boards: boardsSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export default store;