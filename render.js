// import { createRequire } from 'module';
// const require = createRequire(import.meta.url);

var fs = require('fs');
window.onload = function () {
	var btn = this.document.querySelector('#btn');
	var content = this.document.querySelector('#content');
	btn.onclick = function () {
		fs.readFile('book.txt', (err, data) => {
			content.innerHTML = data;
		});
	};
};
