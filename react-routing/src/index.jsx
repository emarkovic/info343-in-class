import React from "react";
import {render} from "react-dom";

import App from "./app.jsx";
import Cart from "./cart.jsx";
import Products from "./products.jsx";

import {Router, Route, IndexRoute, hashHistory} from 'react-router';

// <></>

var router = (
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Products}></IndexRoute>
			<Route path="/cart" component={Cart}></Route>
		</Route>
	</Router>
);

render(router, document.getElementById("app"));
