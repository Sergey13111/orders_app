import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
	{
		items: [
			{
				_id: { type: String, required: true },
				productName: { type: String, required: true },
				model: { type: String, required: true },
				price: { type: String, required: true },
				count: { type: Number, required: true },

				// productItems: {
				// 	type: mongoose.Schema.Types.ObjectId,
				// 	ref: 'Product',
				// 	required: true,
				// },
			},
		],
		totalPrice: { type: Number, required: true },
		userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
	},
	{
		timestamps: true,
	}
);

const Order = mongoose.model('Order', orderSchema);
export default Order;
