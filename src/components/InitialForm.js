import React, { useState, useEffect } from "react";
import "./css/InitialForm.module.css";

const InitialForm = (props) => {
	const [enteredItem, setEnteredColour] = useState("");
	const [enteredQuantity, setEnteredQuantity] = useState("");
	let price;

	const [formIsValid, setFormIsValid] = useState(false);

	const colourChangeHAndler = (event) => {
		setEnteredColour(event.target.value);
	};

	const quantityChangeHAndler = (event) => {
		setEnteredQuantity(event.target.value);
	};

	useEffect(() => {
		setFormIsValid(false);
		if (
			enteredItem.trim().length > 2 &&
			+enteredQuantity > 0 &&
			props.category !== null &&
			props.category !== "ERROR"
		) {
			setFormIsValid(true);
		}
	}, [enteredItem, enteredQuantity, props.category]);

	function formSubmit(event) {
		event.preventDefault();

		if (enteredItem === "Aloo Tikki") price = 2 * enteredQuantity;
		if (enteredItem === "Veggie") price = 3 * enteredQuantity;
		if (enteredItem === "Mac and Cheese") price = 2.5 * enteredQuantity;
		if (enteredItem === "French Fries") price = 2 * enteredQuantity;
		if (enteredItem === "Veg Puff") price = 1.5 * enteredQuantity;
		if (enteredItem === "Non-veg Puff") price = 2 * enteredQuantity;
		if (enteredItem === "Coca Cola") price = 1.2 * enteredQuantity;
		if (enteredItem === "Sprite") price = 1.2 * enteredQuantity;
		if (enteredItem === "Soda") price = 1.2 * enteredQuantity;

		props.cart(price);
		const enteredData = {
			item: enteredItem,
			quantity: enteredQuantity,
		};

		props.onSubmit(enteredData);

		setEnteredColour("");
		setEnteredQuantity("");

		setFormIsValid(false);
	}

	return (
		<div>
			<form onSubmit={formSubmit}>
				<label htmlFor="colourName" style={{ fontSize: "35px" }}>
					{" "}
					Item Name:{" "}
				</label>
				{props.category === "burgers" && (
					<select htmlFor="colourName" onChange={colourChangeHAndler}>
						<option> Select Item </option>{" "}
						<option value="Aloo Tikki"> Aloo Tikki $2 </option>{" "}
						<option value="Veggie"> Veggie $3 </option>{" "}
						<option value="Mac and Cheese"> Mac and Cheese $2 .5 </option>{" "}
					</select>
				)}{" "}
				{props.category === "sides" && (
					<select htmlFor="colourName" onChange={colourChangeHAndler}>
						<option> Select Item </option>{" "}
						<option value="French Fries"> French Fries $2 </option>{" "}
						<option value="Veg Puff"> Veg Puff $1 .5 </option>{" "}
						<option value="Non-veg Puff"> Non - veg Puff $2 </option>{" "}
					</select>
				)}{" "}
				{props.category === "beverages" && (
					<select htmlFor="colourName" onChange={colourChangeHAndler}>
						<option> Select Item </option>{" "}
						<option value="Coca Cola"> Coca Cola $1 .2 </option>{" "}
						<option value="Sprite"> Sprite $1 .2 </option>{" "}
						<option value="Soda"> Soda $1 .2 </option>{" "}
					</select>
				)}
				<br />
				<label htmlFor="quantity" style={{ fontSize: "35px" }}>
					{" "}
					Item Quantity:{" "}
				</label>{" "}
				<input
					type="number"
					id="quantity"
					onChange={quantityChangeHAndler}
					value={enteredQuantity}
				></input>{" "}
				<h4> {enteredQuantity} </h4>
				<br />
				<button type="submit" disabled={!formIsValid}>
					ADD ITEM{" "}
				</button>{" "}
			</form>{" "}
		</div>
	);
};

export default InitialForm;
