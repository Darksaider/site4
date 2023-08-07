// menu mobile
const menu = document.querySelector('.menu');
const btn = menu.querySelector('.btn-toggle');
if (menu) {
	btn.addEventListener('click', evt => {
		menu.classList.toggle('active');
		btn.classList.toggle('active');
		document.body.classList.toggle('_lock');
	});
}
//анимация сразу после загруски стриницы

const mainCenter = document.querySelectorAll(".anim-items-load");

function loading() {
	document.addEventListener('DOMContentLoaded', () => {
		for (const addClass of mainCenter) {
			addClass.classList.add('_load-animeted')
		}
	})
}
setTimeout(loading(), 2000)

//анимация при скроле

const scrollAnimation = () => {
	const scrollItemAnim = document.querySelectorAll('.anim-items')
	let windowCenter = (window.innerHeight / 2) + window.scrollY;
	window.addEventListener('scroll', () => {
		for (let animItem of scrollItemAnim) {
			let scrolOffset = (animItem.offsetTop / 1.5) + animItem.offsetHeight / 1.5;
			console.log(scrolOffset)
			console.log(windowCenter)

			if (windowCenter >= scrolOffset) {
				animItem.classList.add('_animeted')
			}
		}
	});

};
window.addEventListener('scroll', () => {
	scrollAnimation()
})
scrollAnimation()

//анимация при скроле 

// let animItems = document.querySelectorAll('._anim-items');
// if (animItems.length > 0) {
// 	window.addEventListener("scroll", animOnScroll);
// 	function animOnScroll() {
// 		for (let index = 0; index < animItems.length; index++) {
// 			const animItem = animItem[index];
// 			const animItemHeight = animItem.offsetHeght;
// 			const animItemOffset = offset(animItem).top;
// 			const animStart = 4;

// 			let animItemPoint = window.innerHeight - animItemHeight / animStart;
// 			if (animItemHeight > window.innerHeight) {
// 				animItemPoint = window.innerHeight - window.innerHeight / animStart;
// 			};
// 			if ((scrollY > animItemOffset - animItemPoint) && scrollX < (animItemOffset + animItemHeight)) {
// 				animItem.classList.add('_animated');
// 			} else {
// 				animItem.classList.remove('_animeted');
// 			}
// 		}
// 	}
// 	function offset(el) {
// 		const rect = el.getBoundingClientRect(),
// 			scrollLeft = window.scrollX || document.documentElement.scrollLeft,
// 			scrollTop = window.scrollY || document.documentElement.scroleTop;

// 		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }

// 	};
// 	setTimeout(() => animOnScroll(), 300)
// };
