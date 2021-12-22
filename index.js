
function sliderPlugin(activeSlide = 2) {
		const slides = document.querySelectorAll('.slide');
		const container = document.querySelector('.container');

		container.addEventListener('click', onShowSlide);

		slides[activeSlide].classList.add('active');

		function onShowSlide(e) {

		removeClassActive();
		e.target.classList.add("active")
		}


		function removeClassActive() {

			slides.forEach((slide) => {
		slide.classList.remove("active");
		})
		}
}

sliderPlugin(1);