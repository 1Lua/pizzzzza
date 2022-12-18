import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cart'
import navReducer from './nav'

export default configureStore({
    reducer: {
        cart: cartReducer,
        nav: navReducer
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})