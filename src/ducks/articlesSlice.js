import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchArticles } from './articlesApi';
import { dateIsWithinRange } from './utils';

const initialState = {
	data: undefined,
	status: 'idle',
};

const fetchArticlesList = createAsyncThunk(
	'articles/fetchArticles',
	async () => {
		return await fetchArticles();
	}
);

const articlesSlice = createSlice({
	name: 'articles',
	initialState,
	reducers: {
		setArticlesList: (state) => state.data
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchArticlesList.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(fetchArticlesList.fulfilled, (state, action) => {
				state.status = 'idle';
				state.data = action.payload;
			});
	},
});

// selectors
const selectArticles = (state) => state.articles?.data;

const selectAuthors = (state) => {
	const stats = {};

	/* I chose to use the articles we fetched before as a starting point to gather a list of authors.
	*  The alternative would be to find if there is a way to do a wild card request with the api
	*  and do something like "show all articles (filtered or not) from start_date"
	*/ 
	state.articles?.data?.forEach((article = {}) => {
		const {
			author: authors = [],
			published,
		} = article;

		authors.forEach(({ name }) => {
			if (dateIsWithinRange(published[0])) {
				if (!stats[name]) {
					stats[name] = {
						articlesPublished: 1,
						lastPublished: published[0],
					};
				} else {
					stats[name].articlesPublished += 1;
					stats[name].lastPublished = published[0] > stats[name].lastPublished
						? published[0]
						: stats[name].lastPublished;
				}
			}
		});
	});
	
	const sortedStats = Object.entries(stats)
		.sort(([,a], [,b]) => {
			const aLastPublished = new Date(a.lastPublished);
			const bLastPublished = new Date(b.lastPublished);
			return b.articlesPublished - a.articlesPublished
				|| bLastPublished - aLastPublished
		})

	return sortedStats;
}

export {
	articlesSlice,
	fetchArticlesList,
	
	selectArticles,
	selectAuthors,
};

export default articlesSlice.reducer;
