//make a 16 x 16 grid
const rows = document.getElementsByClassName("gridRow");
const container = document.querySelector(".container");
const cell = document.getElementsByClassName("cell");

function makeGrid() {
	makeRow(16);
	makeColumn(16);
	hover();
}
makeGrid();
function makeRow(rowNum) {
	for (i = 0; i < rowNum; i++) {
		const rowDiv = document.createElement("div");
		container.appendChild(rowDiv).className = "gridRow";
	}
}

function makeColumn(cellNum) {
	for (i = 0; i < rows.length; i++) {
		for (c = 0; c < cellNum; c++) {
			const newCell = document.createElement("div");
			rows[c].appendChild(newCell).className = "cell";
		}
	}
}

//hover effect
function hover() {
	const cellHover = document.getElementsbyClassName("cell");
	cellHover.forEach((cell) => {
		cell.addEventListener("mouseover", (e) => {
			e.target.style.backgroundColor = "#e8e3e3";
		});
	});
}
