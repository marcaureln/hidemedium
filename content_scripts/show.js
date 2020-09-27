'use strict';

function getArticles() {
	return document.querySelectorAll('article, li');
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
document.body.onscroll = () => { };

undefined;
