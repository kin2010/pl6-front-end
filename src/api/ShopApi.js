import axios from "axios";
import { apiURL } from "../Context/Constants";
import axiosClient from "./AxoisClient";
const ShopApi = {
	getProduct: (params) => {
		const url = `${apiURL}/products`;
		return axios.get(url, { params });
	},
	createProduct: (params) => {
		const url = `${apiURL}/products`;
		return axios.post(url, params);
	},
};
export default ShopApi;
