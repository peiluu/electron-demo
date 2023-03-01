// 主进程
// import { createRequire } from 'module';
// const require = createRequire(import.meta.url);
const electron = require('electron');
const app = electron.app; // 引用app
var BrowserWindow = electron.BrowserWindow; // 控制窗口的引用

let mainWindow = null; // 声明要打开的主窗口

// 监听主进程
app.on('ready', () => {
	mainWindow = new BrowserWindow({
		width: 800,
		height: 700,
		// 允许引入文件
		webPreferences: { nodeIntegration: true, contextIsolation: false },
	});
	// 加载静态页面
	mainWindow.loadFile('index.html');
	mainWindow.on('closed', () => {
		mainWindow = null;
	});
});
