const boxes = document.querySelector(".boxes");
const btn = document.querySelector(".btn");
const body = document.body;

const rdmFn = () => {
  boxes.innerHTML = "";

  for (let i = 0; i < 8; i++) {
    let rdmMet = Math.floor(Math.random() * 0xffffff).toString(16);
    rdmMet = `#${rdmMet.padStart(6, "0")}`;

    let boc = document.createElement("div");
    boc.classList.add("cell");

    let rdmColor = document.createElement("span");
    rdmColor.classList.add("rdmColor");
    rdmColor.innerText = rdmMet;
    boc.appendChild(rdmColor);

    boc.style.backgroundColor = rdmMet;
    boxes.appendChild(boc);
  }
};

rdmFn();

btn.addEventListener("click", rdmFn);



boxes.addEventListener("click", (cell) => {
  const clickBs = cell.target.closest(".cell");
  if (clickBs) {
    boxes.style.backgroundColor = clickBs.style.backgroundColor;
    
  }
});