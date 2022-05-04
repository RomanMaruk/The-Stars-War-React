

const initialState = {}

const characrerReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_CHARACTERS_TO_FAVOVORITE':
			return {
				...state,
				...action.paylod
			};
		case 'REMOVE_CHARACTERS_FROM_FAVOVORITE':
			return {
				...state,
				...action.paylod
			};
		default:
			return state;
	}
}

export default characrerReducer;

