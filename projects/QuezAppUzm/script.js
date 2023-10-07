const q1 = document.querySelector(".q1");
const q2 = document.querySelector(".q2");
const apn = document.querySelector(".apn");
const mmp = document.querySelector(".mmpn");

const apn1 = ["*", "+", "-"];
const num1 = 30;

function randomFn() {
  return Math.floor(Math.random() * num1);
}

function randomApn() {
  return Math.floor(Math.random() * apn1.length);
}

let aa = 0;
function add() {
  q1.innerText = randomFn();
  q2.innerText = randomFn();
  apn.innerText = apn1[randomApn()];

  let num11 = parseInt(q1.innerText);
  let num22 = parseInt(q2.innerText);
  if (apn.innerText === "*") {
    aa = num11 * num22;
    console.log(aa);
    // qymat1.innerText = aa;
  }

  if (apn.innerText === "+") {
    aa = num11 + num22;
    console.log(aa);
    // qymat1.innerText = aa;
  }

  if (apn.innerText === "-") {
    aa = num11 - num22;
    console.log(aa);
    // qymat1.innerText = aa;

  }
}
add();


function randomSonG(max) {
  return Math.floor(Math.random() * max) + 1;
}

function RandomDivT() {
  const randomIndx = randomSonG(4);
  const plr = document.querySelectorAll('p');
  const pnbs = plr[randomIndx];
  pnbs.innerText = aa; 

  
}
RandomDivT();



function RandomDivT() {
  const randomIndx = randomSonG(4);
  const plr = document.querySelectorAll('p');
  const pnbs = plr[randomIndx];
  pnbs.innerText = aa; 


  plr.forEach(function(pnb, index) {
    if (index !== randomIndx) {
      pnb.innerText = randomFn(); 
    }
  });
}