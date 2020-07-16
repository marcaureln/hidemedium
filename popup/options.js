'use strict';

updateCounter();

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
};

function getOptions() {
	let options = {
		show: Options.show,
		hide: Options.hide,
		blur: Options.blur,
	};
	return options;
}

function updateCounter(number) {
	browser.storage.local.get('counter').then((data) => {
		let counter = data.counter;
		if (counter == undefined) {
			document.getElementById('number').innerHTML = 0;
		} else {
			document.getElementById('number').innerHTML = counter;
		}
	});
}

function setCounter(number) {
	browser.storage.local.set({ counter: number });
}

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
	setCounter(response.number);
	updateCounter();
});
