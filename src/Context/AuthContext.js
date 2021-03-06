import axios from "axios";
import { createContext, useReducer, useEffect, useState } from "react";
import { getToken } from "../Utils/Common";
import { apiURL, LOCAL_STORAGE_TOKEN_NAME, USER_ROLE } from "./Constants.js";
import { authReducer } from "../Ruducer/authReducer";
import setAuthToken from "../Utils/setAuthToken";
export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
	//redux
	const [authState, dispatch] = useReducer(authReducer, {
		user: null,
		isLoading: false,
		isAuthenticated: false,
	});
	const [showToast, setShowToast] = useState({
		show: false,
		message: "",
		type: null,
	});
	const loadUser = async () => {
		try {
			console.log("gan tokenzzzzzz");
			if (getToken()) {
				await setAuthToken(getToken());
				console.log("gan token");
				dispatch({
					type: "SET_AUTH",
					payload: {
						isAuthenticated: true,
						// user: response.data.user,
						isLoading: false,
					},
				});
			}
		} catch (error) {
			localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME);
			localStorage.removeItem(USER_ROLE);
			console.log("error");
			setAuthToken(null);
			dispatch({
				type: "SET_AUTH",
				payload: { isAuthenticated: false, user: null },
			});
		}
	};
	useEffect(() => {
		loadUser();
	}, []);
	useEffect(() => {
		return console.log("auth");
	}, []);
	const login = async (formlogin) => {
		try {
			// dispatch({
			// 	type: "SET_AUTH",
			// 	payload: {
			// 		isLoading: true,
			// 	},
			// });
			const response = await axios.post(`${apiURL}/auth/login`, formlogin);
			console.log(formlogin, response);

			//success
			if (response.status === 200) {
				localStorage.setItem(LOCAL_STORAGE_TOKEN_NAME, response.data.token);
				localStorage.setItem(USER_ROLE, response.data.user.role.name);
			}
			dispatch({
				type: "SET_AUTH",
				payload: {
					user: response.data.user,
				},
			});
			// dispatch({
			// 	type: "SET_AUTH",
			// 	payload: {
			// 		isAuthenticated: true,
			// 		user: response.data.user,
			// 		isLoading: false,
			// 	},
			// });
			await loadUser();
			return response;
		} catch (error) {
			// console.log(formlogin);
			console.log(error.response.data.message);
			return error.response.data.message;
		}
	};
	//register

	const register = async (registerForm) => {
		try {
			dispatch({
				type: "SET_AUTH",
				payload: {
					isLoading: true,
				},
			});
			const response = await axios.post(
				`${apiURL}/auth/register`,
				registerForm
			);
			dispatch({
				type: "SET_AUTH",
				payload: {
					isLoading: false,
					isAuthenticated: true,
				},
			});
			return response;
		} catch (error) {
			console.log(registerForm, error.response);
			dispatch({
				type: "SET_AUTH",
				payload: {
					isLoading: false,
				},
			});
			if (error.response.data) return error.response.data;
		}
	};
	// verify otp
	const verify = async (otpForm) => {
		try {
			const response = await axios.post(
				`${apiURL}/auth/verify-email`,
				otpForm
			);
			return response;
		} catch (error) {
			console.log(otpForm, error.response);
			if (error.response.data) return error.response.data;
		}
	};
	const authContextData = {
		login,
		register,
		verify,
		authState,
		showToast,
		setShowToast,
	};
	return (
		<AuthContext.Provider value={authContextData}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContextProvider;
