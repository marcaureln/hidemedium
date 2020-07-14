'use strict';

let counter = 0;

function getArticles() {
	return document.querySelectorAll('article');
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
			if (articles[i].style.display.includes('!important')) {
				articles[i].style.display = 'none !important';
			} else {
				articles[i].style.display = 'none';
			}
			counter++;
		}
	}
	return counter;
}

function blurArticles(articles) {
	if (articles == []) {
		return 0;
	}

	let counter = 0;
	for (let i = 0; i < articles.length; i++) {
		if (articles[i].style.filter != 'blur(1.5rem)') {
			articles[i].style.filter = 'blur(1.5rem)';
			counter++;
		}
	}
	return counter;
}

function showArticles(articles) {
	// Remove effects on each articles
	for (let i = 0; i < articles.length; i++) {
		articles[i].style.filter = '';
		articles[i].style.display = '';
	}
	return [];
}

document.body.onload = function () {
	counter += blurArticles(getStarredArticles(getArticles()));
	// counter += hideArticles(getStarredArticles(getArticles()));
	browser.runtime.sendMessage({ number: counter });
	console.log(counter, ' now !');
};

document.body.onscroll = function () {
	counter += blurArticles(getStarredArticles(getArticles()));
	// counter += hideArticles(getStarredArticles(getArticles()));
	browser.runtime.sendMessage({ number: counter });
	console.log(counter, ' now !');
};
