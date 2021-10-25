import React, { createContext, useReducer } from "react";
import { CartReducer } from "../Ruducer/CartReducer";
import { CategoryContext } from "./CategoryContext";
export const CartContext = createContext();
const CartContextProvider = ({ children }) => {
	const [cartState, dispatch] = useReducer(CartReducer, {
		carts: [],
	});
	const {
		CategoryState: { products },
	} = React.useContext(CategoryContext);
	const addCart = (id) => {
		try {
			// Add cart
			if (products) {
				const cartAdd = products.find((item) => item.id === id);
				dispatch({ type: "ADD_CART", payload: cartAdd });
				//console.log(cartAdd);
			}
		} catch (error) {
			console.log(error);
		}
	};
	const increase_quatity = (id) => {
		try {
			dispatch({ type: "INCREASE", payload: id });
		} catch (error) {
			console.log(error);
		}
	};
	const decrease_quatity = (id) => {
		try {
			dispatch({ type: "DECREASE", payload: id });
		} catch (error) {
			console.log(error);
		}
	};
	const removeCart = (id) => {
		try {
			dispatch({ type: "REMOVE_CART", payload: id });
		} catch (error) {
			console.log(error);
		}
	};
	const removeAllCart = () => {
		try {
			dispatch({
				type: "REMOVE_ALL",
				payload: "",
			});
		} catch (error) {}
	};
	const cartData = {
		addCart,
		cartState,
		increase_quatity,
		decrease_quatity,
		removeCart,
		removeAllCart,
	};
	return (
		<CartContext.Provider value={cartData}>{children}</CartContext.Provider>
	);
};

export default CartContextProvider;
