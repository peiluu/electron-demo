// 渲染进程 
const electron = require('electron');
// remote 模块有邻居的意思
const BrowserWindow = electron.remote.BrowserWindow;
window.onload = function () {
	var btn = this.document.querySelector('#btn1');
	btn.onclick = () => {
		newWin = new BrowserWindow({
			width: 600,
			height: 500,
		});
		// 加载静态页面
		newWin.loadFile('demo.html');
		newWin.on('closed', () => {
			newWin = null;
		});
	};
};
