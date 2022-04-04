import React from 'react';
import { Link } from 'react-router-dom';

import styles from './App.module.css';

const App = () => (
	<div className={styles.container}>
		<h3>arXiv Web Scraper</h3>
		<Link
			className={styles.link}
			to="/articles"
		>
			Find new articles
		</Link>
		<Link
			className={styles.link}
			to="/authors"
		>
			Find new authors
		</Link>
	</div>
);

export default App;
