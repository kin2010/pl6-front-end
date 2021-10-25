import axios from "axios";
import { createContext, useReducer, useEffect } from "react";
import { CategoryReducer } from "../Ruducer/CategoryReducer";
import { apiURL } from "./Constants";

export const CategoryContext = createContext();
const CategoryContextProvider = ({ children }) => {
	const [CategoryState, dispatch] = useReducer(CategoryReducer, {
		category: [],
		products: [],
	});
	const Get_Category = async () => {
		try {
			const response = await axios.get(`${apiURL}/categories`);
			console.log(response);
			//success
			if (response.status === 200) {
				dispatch({
					type: "GET_CATEGORY",
					payload: {
						category: response.data,
					},
				});
			}
		} catch (error) {
			console.log(error.response);
		}
	};
	// Get product
	const Get_Product = () => {
		try {
			const productDummy = [
				{
					id: 123,
					image: "https://firebasestorage.googleapis.com/v0/b/appkinne.appspot.com/o/images%2FB6CF2091-D45B-4204-BD75-5DEE6B3776ED.jpeg?alt=media&token=8d8ffe29-6868-4c50-948c-f87e4b2f4b1e",
					name: "Vip pro",
					desc: "hangf xin  xo",
					price: 5000,
				},
				{
					id: 1234,
					image: "https://icdn.dantri.com.vn/thumb_w/660/2021/10/20/si20goal-1634705885493.jpg",
					name: "Vip pro",
					desc: "hangf xin  xo",
					price: 3000,
				},
				{
					id: 1235,
					image: "https://firebasestorage.googleapis.com/v0/b/appkinne.appspot.com/o/images%2FB6CF2091-D45B-4204-BD75-5DEE6B3776ED.jpeg?alt=media&token=8d8ffe29-6868-4c50-948c-f87e4b2f4b1e",
					name: "Vip pro",
					desc: "hangf xin  xo",
					price: 2000,
				},
				{
					id: 1236,
					image: "https://firebasestorage.googleapis.com/v0/b/appkinne.appspot.com/o/images%2FB6CF2091-D45B-4204-BD75-5DEE6B3776ED.jpeg?alt=media&token=8d8ffe29-6868-4c50-948c-f87e4b2f4b1e",
					name: "Vip pro",
					desc: "hangf xin  xo",
					price: 5000,
				},
				{
					id: 1237,
					image: "https://firebasestorage.googleapis.com/v0/b/appkinne.appspot.com/o/images%2FB6CF2091-D45B-4204-BD75-5DEE6B3776ED.jpeg?alt=media&token=8d8ffe29-6868-4c50-948c-f87e4b2f4b1e",
					name: "Vip pro",
					desc: "hangf xin  xo",
					price: 5000,
				},
				{
					id: 1238,
					image: "https://firebasestorage.googleapis.com/v0/b/appkinne.appspot.com/o/images%2FB6CF2091-D45B-4204-BD75-5DEE6B3776ED.jpeg?alt=media&token=8d8ffe29-6868-4c50-948c-f87e4b2f4b1e",
					name: "Vip pro",
					desc: "hangf xin  xo",
					price: 5000,
				},
				{
					id: 1239,
					image: "https://firebasestorage.googleapis.com/v0/b/appkinne.appspot.com/o/images%2FB6CF2091-D45B-4204-BD75-5DEE6B3776ED.jpeg?alt=media&token=8d8ffe29-6868-4c50-948c-f87e4b2f4b1e",
					name: "Vip pro",
					desc: "hangf xin  xo",
					price: 5000,
				},
				{
					id: 12310,
					image: "https://firebasestorage.googleapis.com/v0/b/appkinne.appspot.com/o/images%2FB6CF2091-D45B-4204-BD75-5DEE6B3776ED.jpeg?alt=media&token=8d8ffe29-6868-4c50-948c-f87e4b2f4b1e",
					name: "Vip pro",
					desc: "hangf xin  xo",
					price: 5000,
				},
				{
					id: 12311,
					image: "https://firebasestorage.googleapis.com/v0/b/appkinne.appspot.com/o/images%2FB6CF2091-D45B-4204-BD75-5DEE6B3776ED.jpeg?alt=media&token=8d8ffe29-6868-4c50-948c-f87e4b2f4b1e",
					name: "Vip pro",
					desc: "hangf xin  xo",
					price: 5000,
				},
			];
			dispatch({ type: "GET_PRODUCT", payload: productDummy });
		} catch (error) {
			console.log(error);
		}
	};
	const data = { Get_Category, Get_Product, CategoryState };
	return (
		<CategoryContext.Provider value={data}>
			{children}
		</CategoryContext.Provider>
	);
};

export default CategoryContextProvider;
