import { configureStore, createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: 'example',
    initialState: {
        data: null,
    },
    reducers: {
        setData: (state, action) => {
            state.data = action.payload;
        },
    },
});

export const { setData } = slice.actions;

const store = configureStore({
    reducer: {
        example: slice.reducer,
    },
});

export default store;