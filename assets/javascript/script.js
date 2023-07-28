const cklikk = document.querySelector(".cklikk");
const tillar = document.querySelector(".tillar");
const ecs = document.querySelector(".ecs");

cklikk.addEventListener("click", () => {
  tillar.style.display = "flex";
});

ecs.addEventListener("click", () => {
  tillar.style.display = "none";
});

