import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/home';
import { Products } from '../pages/products';
import { NotFound } from '../pages/notFound';
import { SignUp } from '../pages/signUp';
import { LogIn } from '../pages/logIn';
import { CartOrders } from '../pages/cartOrders';
// import { Company } from '../pages/company';
// import { CreateCompany } from '../pages/createCompany';
// import { Profile } from '../pages/profile';

const Routers = () => {
	return (
		<Routes>
			<Route
				path='/'
				element={<Home />}
			/>
			<Route
				path='auth/register'
				element={<SignUp />}
			/>
			<Route
				path='auth/login'
				element={<LogIn />}
			/>
			<Route
				path='products'
				element={<Products />}
			/>
			<Route
				path='cartOrders'
				element={<CartOrders />}
			/>
			<Route
				path='*'
				element={<NotFound />}
			/>
		</Routes>
	);
};

export default Routers;
