'use strict';

let hiden = 0;
let starredArticles = [];

function getArticles() {
	return document.querySelectorAll('article');
}

function getStarredArticles() {
	let articles = getArticles();
	let starredArticles = [];
	for (let i = 0; i < articles.length; i++) {
		if (
			articles[i].getElementsByClassName('svgIcon--star').length != 0 &&
			!articles[i].style.display.includes('none')
		) {
			starredArticles.push(articles[i]);
		}
	}
	return starredArticles;
}

function hideArticles(articles) {
	if (articles == []) {
		return 0;
	}

	let count = 0;
	for (let i = 0; i < articles.length; i++) {
		if (articles[i].style.display.includes('!important')) {
			articles[i].style.display = 'none !important';
		} else {
			articles[i].style.display = 'none';
		}
		starredArticles.push(articles[i]);
		count++;
	}
	console.log('+', count, ' now !');
	return count;
}

function blurArticles(articles) {
	if (articles == []) {
		return 0;
	}

	let count = 0;
	for (let i = 0; i < articles.length; i++) {
		articles[i].style.filter = 'blur(1.5rem)';
		starredArticles.push(articles[i]);
		count++;
	}
	console.log('+', count, ' now !');
	return count;
}

function updateCounter() {}

function showArticles(articles) {
	// Remove effects on each articles
	for (let i = 0; i < articles.length; i++) {
		articles[i].style.filter = '';
		articles[i].style.display = '';
	}
	return [];
}

document.body.onload = function () {
	hiden += hideArticles(getStarredArticles());
};

document.body.onscroll = function () {
	hiden += hideArticles(getStarredArticles());
};
