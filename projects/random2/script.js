const boxes = document.querySelector(".boxes");
const btn = document.querySelector(".btn");
const next = document.querySelector(".next");
const body = document.body;

function generateColor() {
  return "#" + Math.floor(Math.random() * 0xffffff).toString(16).substring(2, 12);
}

const generateBoxes = () => {
  boxes.innerHTML = "";

  for (let i = 0; i < 8; i++) {
    const color = generateColor();
    let box = document.createElement("div");
    box.classList.add("cell");

    let randomColor = document.createElement("span");
    randomColor.classList.add("randomColor");
    randomColor.innerText = color;
    box.appendChild(randomColor);
 
    box.style.backgroundColor = color;
    boxes.appendChild(box);
  }

  next.addEventListener('click', () => {
    for (let i = 0; i < 4; i++) {
      let newBox = document.createElement('div');
      newBox.classList.add('cell');
      newBox.style.backgroundColor = generateColor();

      let domColor = document.createElement("span");
      domColor.classList.add("randomColor");
      domColor.innerText = generateColor();
      newBox.appendChild(domColor);

      boxes.appendChild(newBox);
    }
  });
};

generateBoxes();

btn.addEventListener("click", generateBoxes);

boxes.addEventListener("click", (cell) => {
  const clickedBox = cell.target.closest(".cell");
  if (clickedBox) {
    boxes.style.backgroundColor = clickedBox.style.backgroundColor;
  }
});