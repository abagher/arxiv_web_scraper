import { parseXmlResponse } from './utils';

const CATEGORIES = [
	'psychiatry',
	'therapy',
	'data science',
	'machine learning',
];
const MAX_RESULTS = 100;

// future work: allow pagination by using the start query
// example start=0&max_results=10 then start=10&max_results=10
const API_URL = `http://export.arxiv.org/api/query?max_results=${MAX_RESULTS}&sortBy=lastUpdatedDate&search_query=`;

function parseTag(category) {
	return `all:${category}`;
}

function _buildArxivUrl() {
	return `${API_URL}${CATEGORIES.map(parseTag).join('+OR+')}`
}

export async function fetchArticles() {
	const url = _buildArxivUrl();
	const xhr = new XMLHttpRequest();

	xhr.open('GET', url, false);
	xhr.send();

	return parseXmlResponse(xhr.responseText);
}
