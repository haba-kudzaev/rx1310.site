// ! Скрипт для скрытия алерта о куки

const cookiesAlert = document.getElementById("alertCookies");
const lsKey = "hideCookiesAlert";

// * Скрытие карточки при нажатии на нее
cookiesAlert.onclick = function() {
	localStorage.setItem(lsKey, true); // добавляем запись о том, что алерт скрыт
	cookiesAlert.style.display = "none"; // скрываем алерт
}

if (localStorage.getItem(lsKey) === "true") {
	cookiesAlert.style.display = "none"; // скрываем алерт
} else {
	cookiesAlert.style.display = "block"; // скрываем алерт
}