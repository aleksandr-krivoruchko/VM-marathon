const cards = document.querySelectorAll('.slide');
const container = document.querySelector('.container');

container.addEventListener('click', onShowSlide);


function onShowSlide(e) {

removeClassActive();
e.target.classList.add("active")
}


function removeClassActive() {

	cards.forEach((slide) => {
slide.classList.remove("active");
})
}