import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import classes from "./css/AddOrder.module.css";

import InitialForm from "../components/InitialForm";
import TempOrder from "../components/TempOrder";
import Orders from "../components/Orders";
import EditOrder from "../components/EditOrder";

function AddOrder(props) {
	const dispatch = useDispatch();
	const storeOrders = useSelector((state) => state.orders);
	const [category, setCategory] = useState("");
	const [username, setUsername] = useState("");
	const [data, setData] = useState([]);
	const [cart, setCart] = useState(0);

	const [editOrder, setEditOrder] = useState(false);
	let editOrderId = useRef();

	const [formIsValid, setFormIsValid] = useState(false);

	useEffect(() => {
		setFormIsValid(false);
		if (data.length > 0 && username.trim().length > 3) {
			setFormIsValid(true);
		}
	}, [data, username]);

	const userChangeHandler = (event) => {
		setUsername(event.target.value);
	};

	const categoryChangeHandler = (event) => {
		setCategory(event.target.value);
	};

	function initialSubmitHandler(enteredData) {
		setData((prevData) => {
			return [...prevData, enteredData];
		});
	}

	function cartHandler(amount) {
		setCart((prevCart) => {
			return prevCart + amount;
		});
	}

	function editOrderHandler(id) {
		editOrderId.current = id;
		setEditOrder(true);
	}

	function orderSaveHandler() {
		setEditOrder(false);
	}

	function finalSubmitHandler(event) {
		event.preventDefault();

		const order = {
			name: username,
			items: [...data],
			amount: cart,
		};

		const array = [...storeOrders, order];
		dispatch({ type: "editOrder", orders: array });

		setData([]);
		setUsername("");
		setCart(0);
	}

	function onEditOrder(colour, quantity) {
		console.log(colour, quantity);
	}

	function dispatchOrder(id) {
		dispatch({ type: "dispatchOrder", id: id });
	}

	return (
		<div>
			<nav className={`${classes.navbar}`}>
				<ul className={`${classes.navbar_container}`}>
					<li>
						<Link to="/pendingOrders"> Pending Orders </Link>{" "}
					</li>{" "}
					<li>
						<Link
							to="/todayOrders"
							style={{
								marginLeft: "700px",
							}}
						>
							{" "}
							Today 's Orders
						</Link>{" "}
					</li>{" "}
				</ul>{" "}
			</nav>
			<h3 className={classes.title}> Add Order </h3>
			<label htmlFor="user" style={{ fontSize: "35px" }}>
				{" "}
				Enter Customer Name:{" "}
			</label>{" "}
			<input
				type="text"
				id="user"
				value={username}
				onChange={userChangeHandler}
				style={{ height: "25px", width: "500px" }}
			/>
			<div className={classes.factory}>
				<label htmlFor="category"> Category: </label>{" "}
				<select
					htmlFor="category"
					onChange={categoryChangeHandler}
					style={{ height: "25px", width: "500px", marginLeft: "125px" }}
				>
					<option value="ERROR"> Select Category </option>{" "}
					<option value="burgers"> Burgers </option>{" "}
					<option value="sides"> Sides </option>{" "}
					<option value="beverages"> Beverages </option>{" "}
				</select>{" "}
			</div>{" "}
			<InitialForm
				onSubmit={initialSubmitHandler}
				category={category}
				cart={cartHandler}
			/>
			<TempOrder tempOrder={data} cart={cart} />{" "}
			<form onSubmit={finalSubmitHandler}>
				<button type="submit" disabled={!formIsValid}>
					Place Order{" "}
				</button>{" "}
			</form>{" "}
			<Orders
				orders={storeOrders}
				editOrder={editOrderHandler}
				dispatchOrder={dispatchOrder}
			/>{" "}
			{editOrder && (
				<EditOrder
					editOrderId={editOrderId.current}
					saveOrder={orderSaveHandler}
					orders={storeOrders}
					onEditOrder={onEditOrder}
				/>
			)}{" "}
		</div>
	);
}

export default AddOrder;
