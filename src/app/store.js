import { configureStore } from '@reduxjs/toolkit';
import articlesReducer from '../ducks/articlesSlice';

export const store = configureStore({
	reducer: {
		articles: articlesReducer,
	},
});
