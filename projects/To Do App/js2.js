const dvEln = document.querySelector(".box");
const txInput = document.querySelector("input");
const addBtn = document.querySelector(".add");
const nub = document.querySelector(".nub");
const natija = document.querySelector(".natija");
const nech = document.querySelector(".nech");
let i = 0;
let j = 2;

function cr(value) {
  i++;
  const p = document.createElement("p");
  const cleaning = document.createElement("button");

  p.className = "p";
  p.textContent = value;

  cleaning.className = "cleaning";
  cleaning.textContent = "cleaning";
  p.appendChild(cleaning);

  cleaning.addEventListener("click", (e) => {
    i--;
    nech.textContent = i;
    natija.removeChild(p);
  });

  p.addEventListener("click", (e) => {
    p.classList.toggle("p-activ");
    createHeader(value);
  });

  nech.textContent = i;
  natija.appendChild(p);
}


addBtn.addEventListener("click", () => {
  if(txInput.value === "") {
    return;
  }
  cr(txInput.value);
  txInput.value = `${j++}.`;
  txInput.focus();
  saveData();
});

txInput.addEventListener("keyup", (event) => {
  if (event.key === "ctrl") {
    if (txInput.value === "") {
      return;
    }
    cr(txInput.value);
    txInput.value = "";
    saveData();
  }
});