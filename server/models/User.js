import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
	{
		// fullName: {
		// 	type: String,
		// 	required: true,
		// },
		email: {
			type: String,
			required: true,
			unique: true,
		},
		passwordHash: {
			type: String,
			required: true,
		},
		orderId: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
		// avatarUrl: String,
	},
	{
		timestamps: true,
	}
);

export default mongoose.model('User', UserSchema);
