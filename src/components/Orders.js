import React from "react";
import classes from "./css/Orders.module.css";

const Orders = (props) => {
	function DisplayOrder(props) {
		return (
			<div>
				{props.thisOrder.map((order) => (
					<li key={Math.random()}>
						{order.item} : {order.quantity}
					</li>
				))}
			</div>
		);
	}

	return (
		<div>
			{props.orders.map((order, id) => (
				<li key={Math.random()} className={classes.orders}>
					<h3 className={classes.factory}>Customer : {order.name}</h3>
					<DisplayOrder thisOrder={order.items} />
					<h4>Total :{order.amount}$</h4>
					<br />
					<br />
					{/* <button onClick={() => props.editOrder(id)}>Edit Order</button> */}
					<button
						onClick={() => props.dispatchOrder(id)}
						className={classes.dispatch}
					>
						Order Prepared
					</button>
				</li>
			))}
		</div>
	);
};

export default Orders;
