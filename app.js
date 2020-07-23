'use strict';

let hide = true;

browser.pageAction.onClicked.addListener(function (tab) {
	console.log('clicked');
	if (hide) {
		console.log('hide');
		browser.tabs.executeScript(null, {
			file: '/content_scripts/hide.js',
			allFrames: true,
		});
		browser.pageAction.setIcon({
			tabId: tab.id,
			path: '/icons/icon.svg',
		});
	} else {
		console.log('show');
		browser.tabs.executeScript(null, {
			file: '/content_scripts/show.js',
			allFrames: true,
		});
		browser.pageAction.setIcon({
			tabId: tab.id,
			path: '/icons/visibility.svg',
		});
	}
	hide = !hide;
});
