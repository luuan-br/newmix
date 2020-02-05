import React from "react";
import { Switch, Route } from "react-router-dom";

import NotFound from "./screens/404";
import Home from "./screens/Home";
import Products from "./screens/Products";
import Help from "./screens/Help";
import Dashboard from "./screens/Dashboard";

export default function Routes() {
	return (
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/products" component={Products} />
			<Route path="/help" component={Help} />
			<Route path="/dashboard" component={Dashboard} />
			<Route component={NotFound} />
		</Switch>
	);
}
