//PROGRAM
const playElem = document.querySelector(".play-btn");
console.log(playElem);
const gridElem = document.querySelector(".grid");
console.log(gridElem);
const selectElem = document.getElementById("difficulty");
console.log(selectElem);

let clickedCells = [];
let maxClick;
let bombs;
//logic
playElem.addEventListener("click", function () {
  switch (selectElem.value) {
    //Easy grid 10x10
    case "easy":
      gridElem.innerHTML = "";
      bombs = generateBombs(100);
      maxClick = 100 - bombs.length;
      console.log(bombs);
      generateAnyGrid(100, "easy");

      break;
    // Medium grid 9x9
    case "medium":
      gridElem.innerHTML = "";
      bombs = generateBombs(81);
      console.log(bombs);
      maxClick = 81 - bombs.length;
      generateAnyGrid(81, "medium");

      break;
    //Hard grid
    case "hard":
      gridElem.innerHTML = "";
      bombs = generateBombs(49);
      console.log(bombs);
      maxClick = 49 - bombs.length;
      generateAnyGrid(49, "hard");

      break;

    default:
      gridElem.innerHTML = "";
      bombs = generateBombs(100);
      console.log(bombs);
      maxClick = 100 - bombs.length;
      generateAnyGrid(100, "easy");
  }
});

//FUNCTION

/* ************************* */

/**
 * Description: Create a grid with any number of cell inside
 * @param {any} gridLenght, the number of cell you want.
 * @param {any} difficulty, the class to add to any cell.
 * @returns {any} Html element, grid with cell.
 */
function generateAnyGrid(gridLenght, difficulty) {
  for (let i = 1; i <= gridLenght; i++) {
    const cell = generateGridCell(i);
    cell.classList.add(difficulty);
    cell.addEventListener("click", heandleCell);
    gridElem.append(cell);
  }
}

/* ************************* */

/**
 * Description create one cell with a number inside
 * @param {any} innerNumber
 * @returns {any} html element
 */
function generateGridCell(innerNumber) {
  const newcell = document.createElement("div");
  newcell.classList.add("cell");
  newcell.innerHTML = innerNumber;
  return newcell;
}

/* ************************* */

/**
 * Description add lightgreen class
 * @returns {any} none
 */
function heandleCell() {
  if (bombs.includes(parseInt(this.textContent))) {
    this.classList.add("bomb");
    gameOver();
    const cells = document.querySelectorAll(".cell");
    console.log(cells);
    for (let i = 0; i < cells.length; i++) {
      cells[i].removeEventListener("click", heandleCell);
    }
  } else {
    this.classList.add("lightgreen");
    if (!clickedCells.includes(this.textContent)) {
      clickedCells.push(this.textContent);
    }
    if (clickedCells.length === maxClick) {
      win();
    }
    console.log(clickedCells);
  }
}

/* ************************* */

function rndNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* ************************* */

/**
 * Description Restituisce array di 16 numeri random compresi tra 1 e max senza ripetizioni
 * @returns {array}
 * @param {number} max
 */
function generateBombs(max) {
  const result = [];
  while (result.length < 16) {
    const newNumber = rndNum(1, max);
    if (!result.includes(newNumber)) {
      result.push(newNumber);
    }
  }
  return result;
}

/* ************************* */

function gameOver() {
  const gameOverMess = document.createElement("h2");
  gameOverMess.innerHTML = `Game over! Hai indovinato ${clickedCells.length} caselle prima di perdere!`;
  gameOverMess.classList.add("game-over");
  gridElem.append(gameOverMess);
}

/* ************************* */

function win() {
  const winMess = document.createElement("h2");
  winMess.innerHTML = `Hai vinto! Hai tutte le ${clickedCells.length} caselle!`;
  winMess.classList.add("win");
  gridElem.append(winMess);
}
