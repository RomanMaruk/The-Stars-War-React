import { configureStore } from '@reduxjs/toolkit';

import characrerReducer from './reducer/characterReducer';

const store = configureStore({
	reducer: {
		characrerReducer
	},
});

export default store