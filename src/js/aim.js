const refs = {
	btnStart: document.querySelector("#start"),
	screens: document.querySelectorAll(".screen"),
	btnsTime: document.querySelector("#time-list"),
   timeEl: document.querySelector("#time"),
   board: document.querySelector("#board"),
}
const colors = ['#FF1493', '#FF6347', '#4B0082', '#9400D3', '#7FFF00', '#20B2AA', '#0000FF', '#00BFFF', '#DC143C', '#FFFF00'];

refs.btnStart.addEventListener("click", onBtnStart);
refs.btnsTime.addEventListener("click", onBtnsTime);
refs.board.addEventListener("click", onCircleClick);
let time = 0;
let score = 0;


function onBtnStart(e) {
	e.preventDefault();
	refs.screens[0].classList.add("up");
}

function onBtnsTime(e) {
	if(e.target.classList.contains("time-btn")){
		time = parseInt(e.target.getAttribute("data-time"));
		refs.screens[1].classList.add("up");

		startGame();
	}
}

function startGame() {
refs.timeEl.innerHTML = `00:${time}`;
createRandomCircle();
setInterval(() => {
	
if (time === 0) {
	finishGame();
} else {
	let currentTime = --time;

	if(currentTime < 10){
			currentTime = `0${currentTime}`;
	}
	refs.timeEl.innerHTML = `00:${currentTime}`;

}
}, 1000);
}

function finishGame() {
	refs.timeEl.parentNode.remove();
	refs.board.innerHTML = `<h1>Попаданий по мишеням: ${score}</h1>`;
}

function createRandomCircle() {
	const circle = document.createElement("div");
	const sizeCircle = getRandomNumber(10, 50);
	const {width, height} = board.getBoundingClientRect();
   const x = getRandomNumber(0, width - sizeCircle);
	const y = getRandomNumber(0, height - sizeCircle);
	const color = getRandomColor();


	circle.classList.add("circle");
	circle.style.width = `${sizeCircle}px`;
	circle.style.height = `${sizeCircle}px`;
	circle.style.top = `${y}px`;
	circle.style.left = `${x}px`;
	circle.style.backgroundColor = color;
	refs.board.append(circle);
}

function getRandomNumber(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}

function onCircleClick(e) {

	if(e.target.classList.contains("circle")){
		score += 1;
		e.target.remove();
		createRandomCircle();
	}
}

const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];
