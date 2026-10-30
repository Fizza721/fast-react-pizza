import { configureStore } from '@reduxjs/toolkit';
import useReducer from './features/user/userSlice';
import cartReducer from './features/cart/CartSlice';

const store = configureStore({
  reducer: {
    user: useReducer,
    cart: cartReducer,
  },
});

export default store;
