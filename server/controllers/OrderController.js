import OrderModel from '../models/Order.js';

export const createOrder = async (req, res) => {
	try {
		const doc = new OrderModel({
			items: req.body.items,
			totalPrice: req.body.totalPrice,
			userId: req.user._id,
		});

		const order = await doc.save();

		res.json(order);
	} catch (error) {
		console.log(error);
		res.status(500).json({
			message: 'Failed to create orders',
		});
	}
};

export const getAll = async (req, res) => {
	try {
		const orders = await OrderModel.find();
		res.json(orders);
	} catch (error) {
		console.log(error);
		res.status(500).json({
			message: 'Failed to receive orders',
		});
	}
};
