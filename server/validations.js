import { body } from 'express-validator';

export const loginValidation = [
	body('email', 'Invalid mail format').isEmail(),
	body('password', 'Password must be at least 5 characters').isLength({ min: 5 }),
];

export const registerValidation = [
	body('email', 'Invalid mail format').isEmail(),
	body('password', 'Password must be at least 5 characters').isLength({ min: 5 }),
	body('fullName', 'Enter full name').isLength({ min: 3 }),
	body('avatarUrl', 'Wrong avatar link').optional().isURL(),
];

export const productCreateValidation = [
	body('nameProduct', 'Enter product name').isLength({ min: 3 }).isString(),
	body('model', 'Enter model name').isLength({ min: 3 }).isString(),
	body('description', 'Enter full name').isLength({ min: 3 }).isString(),
	body('imageUrl', 'Invalid image link').optional().isString(),
];
