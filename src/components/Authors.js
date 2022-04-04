import React, {
	useEffect,
	useState,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
	fetchArticlesList,
	selectAuthors,
} from '../ducks/articlesSlice';

import styles from './index.module.css';

const MIN_TO_SHOW = 50;

export function Authors() {
	const dispatch = useDispatch();

	useEffect(() => {
		// future work: pass names through this function, to allow for filters
		dispatch(fetchArticlesList())
	}, []);

	const authors = useSelector(selectAuthors) || [];

	const [ pageState, setPage ] = useState({ page: 0, currentPage: 1 });

	const {
		page,
		currentPage,
	} = pageState;

	const totalResults = authors.length;
	const paginatedData = authors.slice(page, page + MIN_TO_SHOW);
	const totalPages = Math.ceil(authors.length / MIN_TO_SHOW);


	const _prevPage = () => {
		setPage({
			page: page - MIN_TO_SHOW,
			currentPage: currentPage - 1,
		});
	}

	const _nextPage = () => {
		setPage({
			page: page + MIN_TO_SHOW,
			currentPage: currentPage + 1,
		});
	}

	const _setPage = number => {
		setPage({
			page: MIN_TO_SHOW * number,
			currentPage: number + 1,
		});
	}

	return (
		<div className={styles.container}>
			<h3 data-testid="title">Find New Authors</h3>
			<div className={styles.pageSelect}>
				<span>
					{`Page ${currentPage} of ${totalPages} with ${totalResults} total results`}
				</span>
				<div>
					<button
						onClick={_prevPage}
						disabled={currentPage === 1}
						className={styles.pageButton}
					>
						Prev Page
					</button>
					{[...Array(totalPages).keys()].map(number => (
						<button
							key={`button-${number}`}
							className={`${styles.pageButton} ${currentPage === number + 1 ? styles.active : ''}`}
							onClick={() => _setPage(number)}
						>
							{number + 1}
						</button>
					))}
					<button
						onClick={_nextPage}
						className={styles.pageButton}
						disabled={currentPage === totalPages}
					>
						Next Page
					</button>
				</div>
			</div>
			<ul>
				{paginatedData.map(([ name, stats ]) => {
					const publishedDate = new Date(stats.lastPublished);
					return (
						<li
							key={name}
							className={styles.authorList}
						>{name}
							<ul>
								<li>Articles published: {stats.articlesPublished}</li>
								<li>Last Published: {publishedDate.toLocaleDateString()}</li>
							</ul>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
