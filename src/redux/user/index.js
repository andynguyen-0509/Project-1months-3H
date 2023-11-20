import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Create async action
export const fetchUser = createAsyncThunk('user/fetchUser', async (userId, thunkAPI) => {
    // Fake call API
    return new Promise((resolve) => {
        setTimeout(() => {
            const user = { id: userId, name: 'Nam Tran' };
            resolve(user);
        }, 1000);
    });
});

const userSlice = createSlice({
    name: 'user',
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

const { actions, reducer } = userSlice;
export default reducer;
