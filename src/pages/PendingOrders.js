import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import classes from "./css/PendingOrders.module.css";

function PendingOrders() {
	const storeOrders = useSelector((state) => state.orders);

	function DisplayOrder(props) {
		return (
			<div>
				{" "}
				{props.thisOrder.map((order) => (
					<li key={Math.random()}>
						{" "}
						{order.item}: {order.quantity}{" "}
					</li>
				))}{" "}
			</div>
		);
	}

	return (
		<div>
			<nav className={`${classes.navbar}`}>
				<ul className={`${classes.navbar_container}`}>
					<li>
						<Link to="/"> Add Order </Link>{" "}
					</li>{" "}
				</ul>{" "}
			</nav>
			<h3 className={classes.title}> Pending Orders </h3>
			<div>
				{" "}
				{storeOrders.map((order, id) => (
					<li key={Math.random()} className={classes.orders}>
						<h3 className={classes.factory}> Customer Name: {order.name} </h3>{" "}
						<DisplayOrder thisOrder={order.items} />{" "}
					</li>
				))}{" "}
			</div>{" "}
		</div>
	);
}

export default PendingOrders;
