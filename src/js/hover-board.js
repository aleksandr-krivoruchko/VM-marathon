const board = document.querySelector("#board");
const SQUARES_NUM = 1850;
const colors = ['#FF1493', '#FF6347', '#4B0082', '#9400D3', '#7FFF00', '#20B2AA', '#0000FF', '#00BFFF', '#DC143C', '#FFFF00'];

for (let i = 0; i < SQUARES_NUM; i += 1) {
const square = document.createElement("div");
square.addEventListener("mouseover", setColor);
square.addEventListener("mouseleave", removeColor);
square.classList.add("square")	;
board.append(square);
}

function setColor(e) {
	const color = getRandomColor();
	e.target.style.backgroundColor = color;
		e.target.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(e) {
	e.target.style.backgroundColor = "#1d1d1d";
	e.target.style.boxShadow = '0 0 2px #000';
}

const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];
