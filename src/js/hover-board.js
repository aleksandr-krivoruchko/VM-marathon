const board = document.querySelector("#board");
const SQUARES_NUM = 1850;
const colors = ['#FF1493', '#FF6347', '#4B0082', '#9400D3', '#7FFF00', '#20B2AA', '#0000FF', '#00BFFF', '#DC143C', '#FFFF00'];

for (let i = 0; i < SQUARES_NUM; i += 1) {
const square = document.createElement("div");
square.addEventListener("mouseover", () => {setColor(square)});
square.addEventListener("mouseleave", () => {removeColor(square)});

square.classList.add("square")	;
board.append(square);
}

function setColor(el) {
	const color = getRandomColor();
	el.style.backgroundColor = color;
		el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(el) {
	el.style.backgroundColor = "#1d1d1d";
	el.style.boxShadow = '0 0 2px #000';
}

function getRandomColor() {
	const index = Math.floor(Math.random() * colors.length);
	return colors[index];
}
