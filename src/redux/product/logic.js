import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../utils/httpRequest';

// create async actions

const getProducts = createAsyncThunk('product/getProducts', async (currentpage) => {
    const response = await api.get(`/v1/products?page=${currentpage}`);
    return response.data.data;
});

const getSearchProducts = createAsyncThunk('product/getSearchProducts', async (keyword) => {
    const response = await api.get(`/v1/search?keyword=${keyword}`);
    return response.data;
});

const getCurrentProducts = createAsyncThunk('product/getCurrentProducts', async (productId) => {
    const response = await api.get(`/v1/products/${productId}`);
    return response.data.data;
});




export { getProducts, getSearchProducts,getCurrentProducts };