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
}

function changeGrid() {
  let y = prompt("How many squares per side?");
  clearGrid();
  // clearGridV2();
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
  canvas.innerHTML = "";
  // console.log("after clear");
  // console.log(canvas);
}

drawGrid();
