const canvas = document.querySelector(".container");
const btn = document.querySelector("button");
btn.addEventListener("click", changeGrid);

function drawGrid(x = 16) {
  const firstRow = document.createElement("div");
  for (i = 0; i < x; i++) {
    const newGrid = document.createElement("div");
    newGrid.classList.add("grid");
    firstRow.appendChild(newGrid);
  }
  for (i = 0; i < x; i++) {
    const newRow = firstRow.cloneNode(true);
    newRow.classList.add("row");
    canvas.appendChild(newRow);
  }
  setHoverGrid();
}

function changeGrid() {
  let y = prompt("How many squares per side?");
  while (y > 100) {
    y = prompt("Please keep to 100 or less");
  }
  // clearGrid();
  clearGridV2();
  drawGrid(y);
}

function clearGridV2() {
  while (canvas.firstChild) {
    canvas.removeChild(canvas.firstChild);
  }
}

function clearGrid() {
  let parent = document.querySelectorAll(".row");
  for (const row of parent) {
    let child = row.lastChild;
    while (child) {
      row.removeChild(child);
      child = row.lastChild;
    }
  }
  // canvas.innerHTML = "";
}

drawGrid(16);

function setHoverGrid() {
  const grids = document.querySelectorAll(".grid");
  grids.forEach((grid) => {
    grid.addEventListener("mouseover", colouring);
  });
}

function colouring(e) {
  console.log(e);
  e.target.classList.add("dark");
}
