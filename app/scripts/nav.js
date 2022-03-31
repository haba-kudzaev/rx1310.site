const navWrapper        = document.querySelector('.nav__wrapper');
const navTitle          = document.querySelector('.nav__title');
const navScrollUp       = document.getElementById("scrollUp");
const navScrolledClass  = "nav__wrapper--scrolled";
const navActionDisabled = "nav__action--disabled";

window.addEventListener('scroll', (e) => {

	if (window.pageYOffset > 150) {

		navWrapper.classList.add(navScrolledClass);
		navTitle.classList.remove('hidden');
		navScrollUp.classList.remove(navActionDisabled);

	} else {

		navWrapper.classList.remove(navScrolledClass);
		navTitle.classList.add('hidden');
		navScrollUp.classList.add(navActionDisabled);

	}

});