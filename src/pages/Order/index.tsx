import React from 'react';
import './style.scss';
import empty from '../../images/empty.png';
import axiosClient from '../../apis/clientAxios';
import { moneyFormater } from '../../utils/moneyFormater';
import ModalOrderDetail from './ModalOrderDetail';
import useAuth from '../../stores/auth';

interface OrderProps { }

const OrderPage = (props: OrderProps) => {
	const [orders, setOrders] = React.useState([]);
	const [orderDetail, setOrderDetail] = React.useState(null);
	const [auth] = useAuth()
	const [tab, setTab] = React.useState(1)

	const [open, setOpen] = React.useState(false);

	const handdleOpen = (data?: any) => {
		setOpen(true);
		setOrderDetail(data);
	};
	const handdleCancel = () => {
		setOpen(false);
	};
	const onClickMyNhan = (_tab: number, e: any) => {
		const order = document.querySelector('.list.active');
		if (!order) return;
		order.className = 'list';
		e.target.className = 'list active';
		setTab(_tab)
	};
	React.useEffect(() => {
		const actionOrder = async () => {
			if (auth.user) {
				const orders = await axiosClient.get(`order?userId=${(auth.user as any).id}&statusId=${tab}`);
				if (orders.data)
					setOrders(orders.data)
			}
		}
		actionOrder()

	}, [auth.user, tab])


	return (
		<div className='orderPage container'>
			<div className='orderPage-wrapper'>
				<span onClick={(e) => {
					onClickMyNhan(1, e)
				}} className='list active'>
					Chờ xác nhận
				</span>
				<span onClick={(e) => {
					onClickMyNhan(2, e)
				}} className='list'>
					Chờ lấy hàng
				</span>
				<span onClick={(e) => {
					onClickMyNhan(3, e)
				}} className='list'>
					Đang giao hàng
				</span>
				<span onClick={(e) => {
					onClickMyNhan(4, e)
				}} className='list'>
					Đã giao
				</span>
			</div>
			<div className='orderPage-bottom' style={{ overflow: "scroll" }}>

				{orders?.length > 0 ?
					orders.map((item: any, i: any) => (
						<div
							className="card mb-3"
							onClick={() => handdleOpen(item.booksInOrder)}
							key={i}
						>
							<div
								className="card-header text-white "
								style={{ backgroundColor: "#87CEFA" }}
							>{`Order number ${item.id}`}</div>
							<div className="card-body ">
								<h5 className="card-title">{`Đại chỉ: ${item.address}`}</h5>
								<p className="card-text">{`Tổng tiền: ${moneyFormater(
									item?.subtotal.price
								)}`}</p>
							</div>
						</div>
					)) :
					<div className='orderPage-bottom-empty'>
						<div className='orderPage-bottom-empty-image'>
							<img src={empty} alt='' />
						</div>
						<h3>Empty Orders</h3>
					</div>
				}
			</div>
			<ModalOrderDetail open={open} cancel={handdleCancel} data={orderDetail} />
		</div>
	);
};

export default OrderPage;
