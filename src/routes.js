import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import home from "./pages/home";
import update from "./pages/update";

export default function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={home} />
				<Route path="/update" component={update} />
			</Switch>
		</BrowserRouter>
	);
}
