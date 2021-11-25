import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./css/TodayOrders.module.css";

function TodayOrders() {
	const [orders, setOrders] = useState([]);

	useEffect(() => {
		fetch("http://localhost:8080/getOrders")
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				setOrders(data.orders);
				console.log(data);
			})
			.catch((err) => console.log(err));
	}, []);

	console.log({ orders });

	return (
		<div>
			<nav className={`${classes.navbar}`}>
				<ul className={`${classes.navbar_container}`}>
					<li>
						<Link to="/">Add Order</Link>
					</li>
				</ul>
			</nav>
			<h3 className={classes.title}>Today's Orders</h3>
			<div>
				{orders &&
					orders.map((order) => (
						<li key={order._id}>
							<p>{order.name}</p>
							<p>${order.amount}</p>
						</li>
					))}
			</div>
		</div>
	);
}

export default TodayOrders;
