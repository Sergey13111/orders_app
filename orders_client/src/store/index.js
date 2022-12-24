import { configureStore } from '@reduxjs/toolkit';
import { productsReducer } from './productsSlice';
import { authReducer } from './authSlice';
import { cartOrdersReducer } from './cartOrdersSlice';
import { ordersHistoryReducer } from './ordersHistorySlice';

const store = configureStore({
	reducer: {
		products: productsReducer,
		auth: authReducer,
		cart: cartOrdersReducer,
		ordersHistory: ordersHistoryReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

export default store;
