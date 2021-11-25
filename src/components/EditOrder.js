import React, { useRef } from "react";

const EditOrder = (props) => {
	const colourValueRef = useRef();
	const quantityValueRef = useRef();

	let obj2 = props.orders.filter((order, id) => {
		if (id === props.editOrderId) {
			return order;
		}
		return 0;
	});

	let obj = [].concat.apply([], obj2); //reducing array of array to array

	function afterEdit(event) {
		event.preventDefault();
		const colourValue = colourValueRef.current.value;
		const quantityValue = quantityValueRef.current.value;

		props.onEditOrder(colourValue, quantityValue);
	}

	function DisplayOrder(props) {
		return (
			<ul>
				{props.thisOrder.map((order) => (
					<form onSubmit={afterEdit}>
						<input type="text" value={order.colour} ref={colourValueRef} />
						<input
							type="number"
							value={order.quantity}
							ref={quantityValueRef}
						/>
						<button type="submit">Save Item</button>
					</form>
				))}
			</ul>
		);
	}

	return (
		<div>
			<DisplayOrder thisOrder={obj} />
			<button onClick={() => props.saveOrder()}>Save Order</button>
		</div>
	);
};

export default EditOrder;
