import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import AddOrderPage from "./pages/AddOrder";
import TodayOrdersPage from "./pages/TodayOrders";
import PendingOrdersPage from "./pages/PendingOrders";

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact>
					<AddOrderPage />
				</Route>
				<Route path="/todayOrders" exact>
					<TodayOrdersPage />
				</Route>
				<Route path="/pendingOrders" exact>
					<PendingOrdersPage />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
