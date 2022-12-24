import { configureStore } from '@reduxjs/toolkit';
import { productsReducer } from './productsSlice';
import { authReducer } from './authSlice';
import { cartOrdersReducer } from './cartOrdersSlice';

const store = configureStore({
	reducer: {
		products: productsReducer,
		auth: authReducer,
		cart: cartOrdersReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

export default store;
