'use strict';

updateCounter();

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
					break;
				case 'hide':
					break;
				case 'blur':
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
