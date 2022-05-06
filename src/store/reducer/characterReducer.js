import { omit } from 'lodash';

const initialState = {}

const characrerReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_CHARACTERS_TO_FAVOVORITE':
			return {
				...state,
				...action.payload
			};
		case 'REMOVE_CHARACTERS_FROM_FAVOVORITE':
			return omit(state, [action.payload]);
		default:
			return state;
	}
}

export default characrerReducer;

