export const CartReducer = (state, action) => {
	const { type, payload } = action;

	switch (type) {
		case "SET_CART":
			return {
				...state,
			};
		case "ADD_CART":
			console.log(state[payload.id] || 1);
			if (state.carts.find((i) => i.id === payload.id)) {
				return { ...state, [payload.id]: (state[payload.id] || 1) + 1 };
			}
			return { ...state, carts: [...state.carts, payload] };
		case "INCREASE":
			if (state[payload]) {
				//quatity:2,3,4
				return { ...state, [payload]: state[payload] + 1 };
			} //quatity:1
			else {
				return { ...state, [payload]: 2 };
			}
		case "DECREASE":
			if (state[payload]) {
				//quatity:2,3,4
				if (state[payload] === 1) {
					//console.log(car);
					return {
						...state,
						carts: state.carts.filter((i) => i.id != payload),
						[payload]: 1,
					};
				}
				return { ...state, [payload]: state[payload] - 1 };
			} else {
				//remove cart id

				return {
					...state,
					carts: state.carts.filter((i) => i.id != payload),
					[payload]: 1,
				};
			}
		case "REMOVE_CART":
			return {
				...state,
				carts: state.carts.filter((i) => i.id != payload),
				[payload]: 1,
			};
		// return { ...state, carts: [...state.carts, payload] };

		case "REMOVE_ALL":
			// state.carts.map((cart) => ([cart.id] = 1));
			return {
				carts: [],
			};
		default:
			return state;
	}
};
