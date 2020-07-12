'use strict';

let hiden = 0;

function getArticles() {
    return document.querySelectorAll('article');
}

function getStarredArticles() {
    let articles = getArticles();
    let starredArticles = [];
    for (let i = 0; i < articles.length; i++) {
        if (articles[i].style.display != 'none') {
            starredArticles.push(articles[i]);
        }
    }
    return starredArticles;
}

function hideStaredArticles(articles) {
    if (articles == []) {
        return 0;
    }

    let count = 0;
    for (let i = 0; i < articles.length; i++) {
        if (articles[i].getElementsByClassName('svgIcon--star').length != 0) {
            if (articles[i].style.display.includes('!important')) {
                articles[i].style.display = 'none !important';
            } else {
                articles[i].style.display = 'none';
            }
            // articles[i].style.filter = 'blur(1.5rem)';
            count++;
        }
    }
    return count;
}

document.body.onload = function () {
    hiden += hideStaredArticles(getStarredArticles());
    console.log(hiden, ' hiden articles on load');
};

document.body.onscroll = function () {
    hiden += hideStaredArticles(getStarredArticles());
    console.log(hiden, ' hiden now !');
};