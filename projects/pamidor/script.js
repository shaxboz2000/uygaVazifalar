const m1   = document.querySelector(".m1");
const m2   = document.querySelector(".m2");
const m3   = document.querySelector(".m3");
const time = document.querySelector(".time");
const btn  = document.querySelector(".btn");
const boxes= document.querySelector(".boxes");


const m11  = document.getElementById("m11");
const m22  = document.getElementById("m22");
const m33  = document.getElementById("m33");
let minute = 25;
let second = 0;
let countdownInterval;

btn.addEventListener('click', ()=> {
  startSecond();
  btn.innerText = "is leaving..." 
});

btn.addEventListener("dblclick", () => {
	startSecond();
	pauseSecond();
	btn.innerText = "start"
});


m1.addEventListener("click", () => {
	m33.classList.remove("activ");
	m22.classList.remove("activ");
	m11.classList.add("activ");
	minute = 25;
  time.innerText = "25 : 00";
	resetTimer();
});


m2.addEventListener("click", () => {
	m22.classList.remove("activ");
	m11.classList.remove("activ");
	m33.classList.add("activ");
	minute = 15;
	time.innerText = "15 : 00";
	document.querySelector("body").style.backgroundColor = 'rgb(56, 133, 138)';
	boxes.style.backgroundColor = 'rgb(70, 130, 130)'
	resetTimer();
});

m3.addEventListener("click", () => {
	m1.classList.remove("activ");
	m2.classList.remove("activ");
	m3.classList.add("activ");
	minute = 5;
	time.innerText = "05 : 00";
	document.querySelector("body").style.backgroundColor = 'rgb(57, 112, 151)';
	boxes.style.backgroundColor = 'rgb(57, 112, 151)'

	resetTimer();
});


const startSecond = () => {
	if (!countdownInterval) {
		countdownInterval = setInterval(() => {
			time.innerText = `${timeString(minute)} : ${timeString(second)}`;

			if (minute === 0 && second === 0) {
				clearInterval(countdownInterval);
				time.innerText = "00 : 00";
        btn
				return;
			}

			if (second === 0) {
				second = 59;
				minute--;
			} else {
				second--;
			}
		}, 1000);
	}
};

const timeString = (num) => (num < 10 ? "0" + num : num);

const resetTimer = () => {
	clearInterval(countdownInterval);
	second = 0;
	time.innerText = `${timeString(minute)} : ${timeString(second)}`;
	countdownInterval = null;
};

const pauseSecond = () => {
	clearInterval(countdownInterval);
	countdownInterval = null;
};