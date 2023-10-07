const q1 = document.querySelector(".q1");
const q2 = document.querySelector(".q2");
const apn = document.querySelector(".apn");
const mmp = document.querySelector(".mmpn");
const plr = document.querySelectorAll("p");
const ntj = document.querySelector(".ntj");
const oby = document.querySelector(".obshy");

const apn1 = ["*", "+", "-"];
const num1 = 30;
let aa = 0;
let num = 1;

function randomFn() {
  return Math.floor(Math.random() * num1);
}

function randomApn() {
  return Math.floor(Math.random() * apn1.length);
}

function RandomDivT() {
  const randomIndx = randomSonG(plr.length);

  if (randomIndx >= 0 && randomIndx < plr.length) {
    const pnbs = plr[randomIndx];
    pnbs.innerText = aa;

    plr.forEach(function (pnb, index) {
      if (index !== randomIndx) {
        pnb.innerText = randomFn();
      }
    });
  } else {
    RandomDivT();
  }
}

function randomSonG(max) {
  return Math.floor(Math.random() * max) + 1;
}

function add() {
  q1.innerText = randomFn();
  q2.innerText = randomFn();
  const apr = apn1[randomApn()];
  apn.innerText = apr;

  let num11 = parseInt(q1.innerText);
  let num22 = parseInt(q2.innerText);

  if (apr === "*") {
    aa = num11 * num22;
    console.log(aa);
  } else if (apr === "+") {
    aa = num11 + num22;
    console.log(aa);
  } else if (apr === "-") {
    aa = num11 - num22;
    console.log(aa);
  }
}


function resultFn() {
  plr.forEach((item) => {
    item.addEventListener("click", (e) => {
      if (+e.target.innerHTML === aa) {
        let btn = document.createElement("p");
        btn.className = "btn";
        btn.innerText = num;
        ntj.appendChild(btn);
        add();
        RandomDivT();
        num++
      }
      
      
      else {
        let btn = document.createElement("p");
        btn.className = "btn";
        btn.style.backgroundColor = "red";
        btn.innerText = num;

        ntj.appendChild(btn);
        add();
        RandomDivT();
        num++;     
      }
    });
  });

  if(num === 10){
    oby.style.display = "none";
  }

}


add();
RandomDivT();
resultFn();
