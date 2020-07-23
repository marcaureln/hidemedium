'use strict';

let hide = true;

browser.pageAction.onClicked.addListener(function () {
	console.log('clicked');
	if (hide) {
		console.log('hide');
		browser.tabs.executeScript(null, { file: '/content_scripts/hide.js' });
	} else {
		console.log('show');
		browser.tabs.executeScript(null, { file: '/content_scripts/show.js' });
	}
	hide = !hide;
});
