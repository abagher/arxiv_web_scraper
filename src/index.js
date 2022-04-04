import React from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter,
	Route,
	Routes,
} from 'react-router-dom';
import { Provider } from 'react-redux';

import {
	Articles,
	Authors,
} from './components';
import App from './App';
import { store } from './app/store';
import './index.css';


ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="articles" element={<Articles />} />
				<Route path="authors" element={<Authors />} />
			</Routes>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
