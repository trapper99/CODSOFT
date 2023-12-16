import {createSlice} from '@reduxjs/toolkit'

export const favouriteSlice = createSlice({
    name: 'favourite',
    initialState: {
        favouriteBoards: []
    },
    reducers: {
        setFavouriteBoards: (state, action) => {
            state.favouriteBoards = action.payload
        }
    }
})