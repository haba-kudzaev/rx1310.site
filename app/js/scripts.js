function s2t() {
	window.scroll({
		top: 0,
		left: 0,
		behavior: 'smooth'
	});
}

window.addEventListener('scroll', (e) => {

	const blocks = {
		navWrapper: document.querySelector('.nav_wrapper'),
		navTitle: document.querySelector('.nav_title'),
		s2t: document.getElementById("s2t")
	}

	const classes = {
		navScrolled: "nav_wrapper--scrolled",
		navActionDisabled: "nav_action--disabled"
	}

	if (window.pageYOffset > 55) {

		blocks.navWrapper.classList.add(classes.navScrolled);
		blocks.navTitle.classList.remove('hidden');
		blocks.s2t.classList.remove(classes.navActionDisabled);

	} else {

		blocks.navWrapper.classList.remove(classes.navScrolled);
		blocks.navTitle.classList.add('hidden');
		blocks.s2t.classList.add(classes.navActionDisabled);

	}

});