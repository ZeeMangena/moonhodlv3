export const initialState = {
	//initialize State Variables here
	hidden: [],
};

//Selector (*KEY*)
//export const getBasketTotal = (basket) =>
//basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
	switch (action.type) {
		//case :{}

		//return {
		//...state,
		//};

		default:
			return state; //in case the app action request matches none of the know commands
	}
};

export default reducer;
