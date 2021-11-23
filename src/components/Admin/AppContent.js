import React, { Suspense } from "react";
import { Route, Switch } from "react-router";
import Categories from "./components/Categories/Categories";
import Home from "./components/Home/Home";
import Product from "./components/Product/Product";

const AppContent = () => {
	return (
		<>
			<Suspense fallback={<div></div>}>
				<Switch>
					<Route exact path="/admin" render={(props) => <Home />} />
					<Route
						path="/admin/categories"
						render={(props) => <Categories {...props} />}
					/>
					<Route path="/admin/product" component={Product} />
				</Switch>
			</Suspense>
		</>
	);
};

export default AppContent;
