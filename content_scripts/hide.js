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

function hideArticles(articles) {
	if (articles == []) {
		return 0;
	}

	let counter = 0;
	for (let i = 0; i < articles.length; i++) {
		// Do not process been processed articles
		if (!articles[i].style.display.includes('none')) {
			if (articles[i].style.display.includes('important')) {
				articles[i].style.display = 'none !important';
			} else {
				articles[i].style.display = 'none';
			}
			counter++;
		}
	}
	return counter;
}

hideArticles(getStarredArticles(getArticles()));

document.body.onload = function () {
	hideArticles(getStarredArticles(getArticles()));
};

document.body.onscroll = function () {
	hideArticles(getStarredArticles(getArticles()));
};
