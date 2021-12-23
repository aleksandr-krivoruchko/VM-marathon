const refs = {
	btnUp: document.querySelector(".up-button"),
	btnDown: document.querySelector(".down-button"),
	container: document.querySelector(".container"),
	sidebar: document.querySelector(".sidebar"),
	mainSlide: document.querySelector(".main-slide"),
	slidesArray: document.querySelectorAll(".main-slide>div"),
}
const height = refs.container.clientHeight;
const slidesLength = refs.slidesArray.length;
let activeSlideIndex = 0;

refs.sidebar.style.top = `-${(slidesLength - 1) * 100}vh`;

refs.btnUp.addEventListener('click', () => {onSwitchSlide("up")});
refs.btnDown.addEventListener('click', () => {onSwitchSlide("down")});

function onSwitchSlide(direction) {
	if(direction === "up"){
		activeSlideIndex += 1;
		if (activeSlideIndex === slidesLength) {
		activeSlideIndex = 0;
	} 
}  else if(direction === "down") {
		activeSlideIndex -= 1;
		if(activeSlideIndex < 0) {
			activeSlideIndex = slidesLength - 1;
		}
	}

	refs.mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
		refs.sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;

}