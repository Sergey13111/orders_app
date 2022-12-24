import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Table, Button } from 'react-bootstrap';
import { Loader } from '../../components/Loader';
import { fetchOrdersHistory } from '../../store/ordersHistorySlice';

const OrdersHistoryItem = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchOrdersHistory());
		window.scrollTo(0, 0);
	}, [dispatch]);
	return (
		<>
			<Table striped>
				<thead>
					<tr>
						<th>ID</th>
						<th>Date</th>
						<th>Totale Price</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{}</td>
						<td>Mark</td>
						<td>Otto</td>
						<td>
							{/* <Button
								onClick={handleAddCart({ _id, productName, model, price, imageUrl })}
								variant='secondary'
								className={styles.button}>
								Detail
							</Button> */}
						</td>
					</tr>
				</tbody>
			</Table>
		</>
	);
};

export default OrdersHistoryItem;
