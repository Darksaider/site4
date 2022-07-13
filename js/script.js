// menu mobile

const menu = document.querySelector(".menu")
if (menu) {
	const menuBody = document.querySelector('.menu-body')
	menu.addEventListener('click', () => {
		menuBody.prepend(menu);
		document.body.classList.toggle('_lock');
		menu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
		if (menu.classList.contains('_active')) {
			menu.addEventListener('click', () => {
				menuBody.before(menu)
			});
		};
	});
};
