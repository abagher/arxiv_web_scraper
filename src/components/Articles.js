import React, {
	useEffect,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
	fetchArticlesList,
	selectArticles,
} from '../ducks/articlesSlice';

import styles from './index.module.css';

const MAX_AUTHORS = 5;

function ArticleSummary(props) {
	const {
		published,
		title,
		author: authors,
		link: links = [],
	} = props;

	const publishedDate = new Date(published[0]);

	return (
		<div className={styles.articleSummary}>
			<div className={styles.articleDetails}>
				<span className={styles.title}>
					{title[0]}
				</span>
				<div>
					{authors.slice(0, MAX_AUTHORS).map(({ name }, index)=> (
						<span
							key={`${name[0]}-${published[0]}`}
							className={styles.name}
						>
							{name[0]}{index + 1 === authors.length ? '' : ','}
						</span>
					))}
					{authors.length > MAX_AUTHORS && (
						<span>et al.</span>
					)}
				</div>
				<span>
					Published: {publishedDate.toLocaleDateString()}
				</span>
				{links.map(link => (
					<a
						key={link.$.href}
						href={link.$.href}
					>
						{link.$.title ? link.$.title : link.$.rel}
					</a>
				))}
			</div>
		</div>
	);
}

export function Articles() {
	const dispatch = useDispatch();

	useEffect(() => {
		// future work: pass categories through this function, to allow for filters
		dispatch(fetchArticlesList())
	}, []);

	const articles = useSelector(selectArticles) || [];

	return (
		<div className={styles.container}>
			<h3 data-testid="title">Find New Articles</h3>
			{!!articles.length && (
				<div>
					{articles.map(providerDetails => (
						<ArticleSummary
							key={providerDetails.id[0]}
							{...providerDetails}
						/>
					))}
				</div>
			)}
		</div>
	);
}
