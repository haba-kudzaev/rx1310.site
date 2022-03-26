// ! Copyright (c) 2021, Haba Kudzaev <rx1310@inbox.ru>

const storageKey = "themer";
const themes = {
	light: "theme-light",
	dark: "theme-dark"
};

const colors = {
	light: "#e8ebef",
	dark: "#161b22"
};

/* themerSet()
 * └── меняет значение в localStorage
 * @param theme - указывается название темы из списка themes[] */
function themerSet(theme, color) {
	localStorage.setItem(storageKey, theme);
	document.documentElement.className = theme;
	if (color) {
		setColorTheme(color);
	} else {
		setColorTheme(colors.dark);
	}
}

/* themerToggle()
 * └── переключает тему со светлой на темную и наоборот */
function themerToggle() {
	if (localStorage.getItem(storageKey) === themes.dark) {
		themerSet(themes.light, colors.light);
	} else {
		themerSet(themes.dark, colors.dark);
	}
}

/* themerApply()
 * └── применяет тему из localStorage при загрузке страницы */
function themerApply() {
	if (localStorage.getItem(storageKey) === themes.dark) {
		themerSet(themes.dark, colors.dark);
	} else {
		themerSet(themes.light, colors.light);
	}
} themerApply();

function setColorTheme(value) {

	let themeColor = document.querySelector('meta[name="theme-color"]');
	let msTitleColor = document.querySelector('meta[name="msapplication-TileColor"]');
	let appleStatusBarStyle = document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]');

	themeColor.setAttribute('content', value);
	appleStatusBarStyle.setAttribute('content', value);
	msTitleColor.setAttribute('content', value);

}