import { createSlice } from '@reduxjs/toolkit';
import { calcTotalPrice } from '../helpers/calcTotalPrice';
import { getCartFromLS } from '../helpers/getCartFromLS';
// import axios from '../helpers/axios';

// export const fetchCreateOrder = createAsyncThunk(
// 	'cart/fetchCreateOrder',
// 	async (params, thunkAPI) => {
// 		try {
// 			const data = await axios.post('/order');
// 			return data;
// 		} catch (error) {
// 			return console.log(error);
// 			// return thunkAPI.rejectWithValue(error.response.data);
// 		}
// 	}
// );

const { items, totalPrice } = getCartFromLS();

const initialState = {
	totalPrice,
	items,
};

const cartOrdersSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem(state, action) {
			const findItem = state.items.find((obj) => obj._id === action.payload._id);
			console.log(state);
			console.log(action);
			if (findItem) {
				findItem.count++;
			} else {
				state.items.push({
					...action.payload,
					count: 1,
				});
			}
			state.totalPrice = calcTotalPrice(state.items);
		},
		minusItem(state, action) {
			const findItem = state.items.find((obj) => obj._id === action.payload._id);

			if (findItem) {
				findItem.count--;
			}

			state.totalPrice = calcTotalPrice(state.items);
		},
		removeItem(state, action) {
			state.items = state.items.filter((obj) => obj._id !== action.payload);
			state.totalPrice = calcTotalPrice(state.items);
		},
		clearItems(state) {
			state.items = [];
			state.totalPrice = 0;
		},
	},
	// extraReducers: {
	// 	[fetchProducts.pending]: (state) => {
	// 		state.products = null;
	// 		state.status = 'loading';
	// 	},
	// 	[fetchProducts.fulfilled]: (state, action) => {
	// 		state.products = action.payload;
	// 		state.status = 'loaded';
	// 	},
	// 	[fetchProducts.rejected]: (state) => {
	// 		state.products = null;
	// 		state.status = 'error';
	// 	},
	// },
});

// export default productsSlice.reducer;
export const { addItem, removeItem, clearItems, minusItem } = cartOrdersSlice.actions;
export const cartOrdersReducer = cartOrdersSlice.reducer;