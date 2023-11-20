import { createSlice} from '@reduxjs/toolkit';
import { postLogin } from './logic';


const userSlice = createSlice({
    name: 'user',
    initialState: {
        userInfo: null,
        session: null,
        loading: false,
        error: null,
    },
    reducers: {
        resetError: (state) => {
            state.error = null;
          },
    },
    extraReducers: (builder) => {
        builder
            .addCase(postLogin.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(postLogin.fulfilled, (state, action) => {
                state.loading = false;

                state.userInfo = {
                    username: action.payload.data.username,
                  };
                  
                state.session = {
                    access_token: action.payload.data.access_token,
                    refresh_token: action.payload.data.refresh_token,
                    expires_in: action.payload.data.expires_in,
                  };
            })
            .addCase(postLogin.rejected, (state, action) => {
                state.loading = false;
                state.error = "No user found with this email";
            });
    },
});

const { actions, reducer } = userSlice;
export const { resetError } = actions; 
export default reducer;
