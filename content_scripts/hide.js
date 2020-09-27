'use strict';

let selectors = 'article, li.u-flex';

function getArticles(query) {
	return document.querySelectorAll(query);
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
	for (let i = 0; i < articles.length; i++) {
		// Do not process been processed articles
		if (!articles[i].style.display.includes('none')) {
			// if (articles[i].className.includes('flex')) {
			// 	articles[i].style.display = 'none !important';
			// } else {
			articles[i].style.display = 'none';
			// }
		}
	}
}

hideArticles(getStarredArticles(getArticles(selectors)));

document.body.onload = function () {
	hideArticles(getStarredArticles(getArticles(selectors)));
};

document.body.onscroll = function () {
	hideArticles(getStarredArticles(getArticles(selectors)));
};

undefined;
