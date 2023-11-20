import { createSlice } from '@reduxjs/toolkit';
import { getProducts, getSearchProducts, getCurrentProducts} from './logic';

const productSlice = createSlice({
    name: 'product',
    initialState: {
        products:[],
        loading: false,
        error: null,
        status: null,
        searchProducts:[],
        currentProduct:[],
        productSearchKey:'',      
    },
    reducers: {
        setSearchProduct: (state, action) => {
            state.productSearchKey = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            // GET PRODUCTS
            .addCase(getProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.products = action.payload;
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            // GET SEARCH PRODUCTS
            .addCase(getSearchProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getSearchProducts.fulfilled, (state, action) => {
                state.searchProducts = action.payload;
            })
            .addCase(getSearchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            //GET CURRENT PRODUCT
            .addCase(getCurrentProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getCurrentProducts.fulfilled, (state, action) => {
                state.currentProduct = action.payload;
            })
            .addCase(getCurrentProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })

    },
});
const { actions, reducer } = productSlice;
export const { setSearchProduct } = actions;
// export const productReducer = productSlice.reducer;
export default productSlice.reducer;