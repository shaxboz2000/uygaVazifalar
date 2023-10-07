import "./main.css";
import {NUMBER_OF_INIT_CELLS} from "./data";

const container: HTMLParagraphElement= document.querySelector(".container")!;
const boardElm:  HTMLDivElement      = document.querySelector("#board")!;
const livel:     HTMLParagraphElement= document.querySelector("#title")!;
const fshLivel:  HTMLParagraphElement= document.querySelector("#fshLivel")!;
const fsh:       HTMLParagraphElement= document.querySelector(".fsh")!;
const btn:       HTMLButtonElement   = document.querySelector("#btn")!;


let cells   :string[] = [];
let correctAnswers  = 0;
let count11 :number = 0;
let count33 :number = 0;
let num11   :number = 3;
let num22   :number = 9;




// HANDLE FUNCTIONS
function handleCell(cell: HTMLDivElement, cellIdx: number) {
  if (!cells[cellIdx]) {
    container.style.display = "none";
		fsh.style.display = "flex"
		fshLivel.innerText = `LIVEL : ${count11}`;
		count11 = 0;

    return setTimeout(init, 2000);
  }

    correctAnswers++;
    cell.classList.add("active");



  if (correctAnswers === NUMBER_OF_INIT_CELLS+count33){
	  setTimeout(init, 1000);
	  count11++;
	 

	 if(count11 % 2 === 0){
		count33 ++;
    num11++;
    num22 = num11*num11;
		boardElm.style.gridTemplateColumns = `repeat(${num11}, 1fr)`;
		boardElm.style.gridTemplateRows    = `repeat(${num11}, 1fr)`;

	 }
	}
}


btn.addEventListener('click', ()=>{
	container.style.display = "flex";
	fsh.style.display = "none"
	num11  = 3;
	num22  = 9;
	count33= 0;
	boardElm.style.gridTemplateColumns = `repeat(${num11}, 1fr)`;
	boardElm.style.gridTemplateRows    = `repeat(${num11}, 1fr)`;
	renderCells();
})

// RENDER FUNCTIONS
function renderCells() {
  boardElm.innerHTML = "";
	
  const initCellElms: HTMLDivElement[] = [];

  for (let idx = 0; idx < cells.length; idx++) {
    const cell = cells[idx];
    const cellElm = document.createElement("div");
    cellElm.classList.add("cell");

    if (cell) {
      cellElm.classList.add("active");
      cellElm.innerText = cell;
      initCellElms.push(cellElm);
    }

    cellElm.onclick = (e) => handleCell(e.target as HTMLDivElement, idx);
    boardElm.append(cellElm);
  }

  setTimeout(() => {
    for (const cellElm of initCellElms) cellElm.classList.remove("active");
  }, 1000);
}

// LOGIC FUNCTIONS
function init() {
  correctAnswers = 0;
  cells = new Array(NUMBER_OF_INIT_CELLS+count33).fill("🚀");
  const stayCells = new Array((num22) - (NUMBER_OF_INIT_CELLS +count33)).fill("");
   
  cells = [...cells, ...stayCells].sort(() => Math.random() - 0.5);
  livel.innerText = `Livel - ${count11+1}`;
   
  renderCells();

}


init();
