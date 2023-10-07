const out = document.querySelector(".calc-screen p");
const ac = document.querySelector(".ac");
const buttons = document.querySelector(".buttons");

let a = "";
let b = "";
let c = ""; 
let sign = "";
let finish = false;

const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const action = ["-", "+", "X", "/", "%"];


function clearAll() {
  a = "";
  b = "";
  c = "";
  sign = "";
  finish = false;
  out.textContent = 0;
}

ac.onclick = clearAll;
buttons.onclick = (event) => {
  if (!event.target.classList.contains("btn")) return;
  if (event.target.classList.contains("ac")) return;

  out.textContent = "";
  const key = event.target.textContent;
  if (digit.includes(key)) {
    if (b === "" && sign === "") {
      a += key;
      // console.log(a);
      out.textContent = a;
    } else if (a !== "" && b !== "" && finish) {
      b = key;
      finish = false;
      out.textContent = a;
    } else {
      b += key;
      out.textContent = b;
    
    }
    return;
  }

  if (action.includes(key)) {
    sign = key;
    out.textContent = sign;
    
    return;
  }

  if (key === "=") {
    if (b === "") b = 0;
    switch (sign) {
      case "+":
        c = +a + +b;
        console.log(a, sign, b, "=", c);
        break;
      case "-":
        c = a - b;
        console.log(a, sign, b, "=", c);
        break;
      case "X":
        c = a * b;
        console.log(a, sign, b, "=", c);
        break;
      case "%":
        c = a % b;
        break;
      case "/":
        if (b === "0") {
          out.textContent = "Xato";
          a = "";
          b = "";
          sign = "";
          return;
        }
        c = a / b;
        console.log(a, sign, b, "=", c);
        break;
    }
    finish = true;
    out.textContent = a;
  }
};
