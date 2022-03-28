// ! Скрипт для скрытия карточки о куки

const cookiesCard = document.getElementById("alertCookies");
const lsKey = "hideCookiesCard";

// * Скрытие карточки при нажатии на нее
cookiesCard.onclick = function() {
	localStorage.setItem(lsKey, true); // добавляем запись о том, что карточка скрыта
	cookiesCard.style.display = "none"; // скрываем карточку
}

if (localStorage.getItem(lsKey) === "true") {
	cookiesCard.style.display = "none"; // скрываем карточку
} else {
	cookiesCard.style.display = "block"; // скрываем карточку
}