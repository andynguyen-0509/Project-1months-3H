import { combineReducers } from '@reduxjs/toolkit';

import {default as loginReducer } from './login/index';
import {default as productReducer} from './product/index';
import {default as cartReducer} from './cart/index';
const rootReducer = combineReducers({
    login: loginReducer,
    products: productReducer,
    cart : cartReducer
});

export default rootReducer;
