import React from "react";
import classes from "./css/TempOrder.module.css";

const TempOrder = (props) => {
	return (
		<div className={classes.tempOrder}>
			<p className={classes.heading}>This Order</p>
			{props.tempOrder.map((item) => (
				<li key={Math.random()}>
					{item.item} : {item.quantity}
				</li>
			))}
			<h3>{props.cart}$</h3>
		</div>
	);
};

export default TempOrder;
