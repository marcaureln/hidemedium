'use strict';

// document.getElementById('number').innerHTML = 0;

let options = {
	hide: true,
	blur: false,
	disableAll: () => {
		options.hide = false;
		options.blur = false;
	},
	setHide: () => {
		options.hide = true;
		options.blur = false;
	},
	setBlur: () => {
		options.blur = true;
		options.hide = false;
	},
};

document.addEventListener('click', () => {
	let radios = document.getElementsByTagName('input');
	for (let i = 0; i < radios.length; i++) {
		const element = radios[i];
		if (element.checked) {
			switch (element.value) {
				case 'show':
					options.disableAll();
					break;
				case 'hide':
					options.setHide();
					break;
				case 'blur':
					options.setBlur();
					break;
			}
			break;
		}
	}
});
