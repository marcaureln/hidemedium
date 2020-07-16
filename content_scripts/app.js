'use strict';

let counter = 0;

let Options = {
	show: false,
	hide: false,
	blur: true,
	setShow: () => {
		Options.show = true;
		Options.hide = false;
		Options.blur = false;
	},
	setHide: () => {
		Options.show = false;
		Options.hide = true;
		Options.blur = false;
	},
	setBlur: () => {
		Options.show = false;
		Options.hide = false;
		Options.blur = true;
	},
	getOptions: () => {
		let options = {
			show: Options.show,
			hide: Options.hide,
			blur: Options.blur,
		};
		return options;
	},
};

function applyOptions(options) {
	if (options.show) {
		return showArticles(StarredArticles(getArticles()));
	} else if (options.hide) {
		return hideArticles(getStarredArticles(getArticles()));
	} else if (options.blur) {
		return blurArticles(getStarredArticles(getArticles()));
	}
}

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
	return 0;
}

document.body.onload = function () {
	counter += applyOptions(Options.getOptions());
	browser.runtime.sendMessage({ number: counter });
	console.log(counter, ' now !');
};

document.body.onscroll = function () {
	counter += applyOptions(Options.getOptions());
	browser.runtime.sendMessage({ number: counter });
	console.log(counter, ' now !');
};
