import { configureStore } from "@reduxjs/toolkit";
import 
import boardsSlice from "./boardsSlice";

const store = configureStore({
    reducer: {
        boards: boardsSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat()
})

export default store;