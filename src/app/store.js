import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "../components/Admin/components/Categories/CategoriesSlice";
import shopReducer from "../components/Shop/ShopSlice";
import CartReducer from "../components/Cart/CartSlice";
const rootReducer = {
	categories: categoriesReducer,
	shops: shopReducer,
	carts: CartReducer,
};
const store = configureStore({
	reducer: rootReducer,
});
export default store;
