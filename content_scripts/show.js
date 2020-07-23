'use strict';

function getArticles() {
	return document.querySelectorAll('article, li');
}

function getStarredArticles(articles) {
	let starredArticles = [];
	for (let i = 0; i < articles.length; i++) {
		if (articles[i].getElementsByClassName('svgIcon--star').length != 0) {
			starredArticles.push(articles[i]);
		}
	}
	return starredArticles;
}

function showArticles(articles) {
	// Remove effects on each articles
	for (let i = 0; i < articles.length; i++) {
		articles[i].style.filter = '';
		articles[i].style.display = '';
	}
	// return 0;
}

showArticles(getArticles());
document.body.onscroll = () => {};

undefined;
