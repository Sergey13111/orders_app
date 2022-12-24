import express from 'express';
import mongoose from 'mongoose';
// import dotenv from 'dotenv';
import cors from 'cors';

import { registerValidation, loginValidation, productCreateValidation } from './validations.js';
import { handleValidationErrors, checkAuth } from './utils/index.js';
import { UserController, ProductController, OrderController } from './controllers/index.js';

// dotenv.config();

mongoose
	.connect(
		'mongodb+srv://orders:12345@cluster1.nsssgbx.mongodb.net/orders?retryWrites=true&w=majority',
		{
			useNewUrlParser: true,
		}
	)
	.then(() => console.log('DB ok'))
	.catch((err) => console.log('DB error', err));

const app = express();
const PORT = 4444;
mongoose.set('strictQuery', false);

app.use(express.json());
app.use(cors());

app.post('/auth/login', loginValidation, handleValidationErrors, UserController.login);
app.post('/auth/register', registerValidation, handleValidationErrors, UserController.register);
app.get('/auth/me', checkAuth, UserController.getMe);

app.get('/products', ProductController.getAll);
// app.get('/products/:id', ProductController.getOne);
app.post(
	'/product',
	// checkAuth,
	productCreateValidation,
	handleValidationErrors,
	ProductController.createProduct
);
app.delete('/products/:id', ProductController.removeProduct);
// app.patch('/product', ProductController.update);

app.post('/orders', checkAuth, OrderController.createOrder);

app.listen(PORT, (err) => {
	if (err) {
		return console.log(err);
	}
	console.log('Server OK');
});
