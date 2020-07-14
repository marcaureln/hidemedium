'use strict';

let Options = {
	show: true,
	hide: false,
	blur: false,
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
};

function getOptions() {
	return {
		show: Options.show,
		hide: Options.hide,
		blur: Options.blur,
	};
}

function updateCounter(number) {
	if (number != undefined) {
		browser.storage.local.set({ counter: number });
	}
	browser.storage.local.get('counter').then((data) => {
		document.getElementById('number').innerHTML = data.counter;
	});
}

document.onload = updateCounter();

document.addEventListener('click', () => {
	let radios = document.getElementsByTagName('input');
	for (let i = 0; i < radios.length; i++) {
		const radio = radios[i];
		if (radio.checked) {
			switch (radio.value) {
				case 'show':
					Options.setShow();
					break;
				case 'hide':
					Options.setHide();
					break;
				case 'blur':
					Options.setBlur();
					break;
			}
			break;
		}
	}
});

browser.runtime.onMessage.addListener((response) => {
	updateCounter(response.number);
});
