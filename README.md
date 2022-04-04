This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `npm install`
### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

## Discussion

This project was timeboxed to approximately 4 hours, so several of the design considerations were implemented with this time constraint in mind and some technical sacrifices were made. In general, the app was prioritized to be as user friendly as possible to fulfill the main project criteria which was to create a friendlier interface for using Arxiv.

The app simply links to two pages and makes one fetch call when that page first loads. The fetch call retrieves a hundred of the most recent articles published on Arxiv relating to psychiatry, therapy, data science or machine learning. The response is in XML so it is parsed to JSON before it is saved in the redux store. Then, the Articles component selects this data and renders a list of articles.

Future work would be to allow for pagination in the Articles component by fetching ten or so results at a time as the user clicks through the pages. It would also be nice to allow filtering by categories or manually entering new search parameters to find the most relevant results.

Next, adding a loading page or some indication that the app is fetching articles in the background would improve the UX. Similarly some messaging to help the user recover from an error state would also be helpful but were not added due to time constraints.

The Authors page makes the same fetch call but then loops through each article and keeps a tally of the authors it encounters to see how many articles they have published in the last six months. This is, however, limited to only the articles they have published regarding the categories we searched for before. If we wanted to find every author that has published any category of article on Arxiv, we might have to make multiple requests (for every available category) or do a wild card search if the API allows for that.
