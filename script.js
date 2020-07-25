const container = document.querySelector(".container");

let newGrid = makeGrid(16);
//create grid

function makeGrid(gridC) {
	container.style.gridTemplateColumns = `repeat(${gridC}, 1fr)`;
	container.style.gridTemplateRows = `repeat(${gridC}, 1fr)`;

	for (let i = 0; i < gridC * gridC; i++) {
		const cell = document.createElement("div");
		cell.classList.add("gridCell");
		cell.style.backgroundColor = "white";

		container.appendChild(cell);
	}
	hover();
}

function hover() {
	let cellHover = document.querySelectorAll(".gridCell");
	cellHover.forEach((cell) => {
		cell.addEventListener("mouseover", (e) => {
			e.target.style.backgroundColor = "#05F240";
		});
	});
}

//Reset Grid

function reset() {
	while (container.firstChild) {
		container.removeChild(container.firstChild);
	}

	userInput = prompt("How big do you want your grid to be? ", "Input 1~100");
	newGrid = makeGrid(userInput);
	if (userInput >= 1 && userInput <= 100) {
		return;
	} else {
		alert("Invalid! Input 1-100");
	}
}

const resetBtn = document.querySelector(".reset");
resetBtn.addEventListener("click", (e) => {
	reset();
});

//Rainbow Button

// function random() {
// 	let hex = "#";
// 	const rainbowColor = Math.floor(Math.random() * 16777215).toString(16);
// 	hexColor = hex + rainbowColor;

// 	return hexColor;
// }

function rainbow() {
	//randomnize colors
	let hex = "#";
	const rainbowColor = Math.floor(Math.random() * 16777215).toString(16);
	hexColor = hex + rainbowColor;

	let rainbowHover = document.querySelectorAll(".gridCell");
	rainbowHover.forEach((cell) => {
		cell.addEventListener("mouseover", (e) => {
			e.target.style.backgroundColor = hexColor;
		});
	});
}

const rainbowBtn = document.querySelector(".rainbow");
rainbowBtn.addEventListener("click", (e) => {
	rainbow();
});
