import { createSlice } from '@reduxjs/toolkit';


const cartSlide = createSlice({
    name: 'cart',
    initialState: {
        products:[],
        totalPrice: 0,
        totalQuantity: 0
    },
    reducers: {
        addProduct: (state, action) => {
            const newProduct = action.payload;
            const existingProduct = state.products.find((product) => product.id === newProduct.id);
      
            if (existingProduct) {
             
              existingProduct.quantity += newProduct.quantity;
            } else {
              state.products.push({
                id: newProduct.id,
                name: newProduct.name,
                price: newProduct.price,
                quantity: newProduct.quantity, 
                url: newProduct.url
              });
            }
            state.totalQuantity +=  newProduct.quantity;
            state.totalPrice += newProduct.price * newProduct.quantity;
        },
        removeProduct: (state, action) => {
          const productIdToRemove = action.payload;
          const productToRemove = state.products.find((product) => product.id === productIdToRemove);
          if (productToRemove) {
              
              state.totalPrice -= productToRemove.price * productToRemove.quantity;
              state.totalQuantity -= productToRemove.quantity;
              state.products = state.products.filter((product) => product.id !== productIdToRemove);
          }
        },
    },
    extraReducers: (builder) => {
        builder
            

    },
});

export const { addProduct, removeProduct} = cartSlide.actions;
export default cartSlide.reducer;