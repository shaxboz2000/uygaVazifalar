//
// // DOM VARIABLES.

const main1 = document.querySelector(".main1");
const input1 = document.querySelector(".input1");
const btnEnt1 = document.querySelector(".btnEnt1");

const main2 = document.querySelector(".main2");
const input2 = document.querySelector(".input2");
const btnEnt2 = document.querySelector(".btnEnt2");
const xato = document.querySelector(".xato");
const texts = document.querySelector(".texts");

const izsz = document.querySelector(".izsz");
const tpsz = document.querySelector(".tpsz");
const bshqsz = document.querySelector(".bshqsz");
const natij = document.querySelector(".natij");

let texts1 =
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem obcaecati illum et. Saepe eaque exercitationem aliquid at adipisci itaque, voluptas similique, voluptates, recusandae sint eligendi quam minus fugit porro quisquam debitis dolorem veniam aperiam dolorum? Sed placeat hic porro ullam tempora? Dolore ducimus sed veritatis quisquam? In illo esse delectus voluptatum, alias eligendi sint cumque quibusdam maiores omnis sit nobis, explicabo, autem odit! Iusto assumenda fuga nobis, doloribus ab itaque et reiciendis ullam nihil ea dignissimos aperiam beatae minima, nemo dolore rerum at voluptate cum eligendi praesentium, ipsum modi dolor iste quaerat! Laudantium consectetur sed sit, nihil doloremque provident facilis perferendis a dolorem maiores distinctio consequuntur? Consectetur alias perspiciatis id doloremque ducimus est esse quos ipsum praesentium libero quasi sed distinctio dolorum vel autem quisquam, repellendus quaerat pariatur beatae, officia harum. Molestiae ad facilis officiis laudantium et repudiandae deserunt autem pariatur, excepturi cumque non itaque sint. Iure blanditiis maiores ad eveniet temporibus id aspernatur, asperiores consequuntur. Voluptatibus veniam, ducimus dolorem tempora vel eius asperiores distinctio aut sapiente maiores corporis quidem quibusdam delectus autem reprehenderit perspiciatis fugiat placeat ipsa dicta alias quo explicabo fugit omnis. Sunt quos temporibus delectus. Expedita est amet quas vitae dolore recusandae tempora impedit assumenda pariatur quam!";
let texts2 = texts1.split(" ");

btnEnt1.addEventListener("click", () => {
  let inputVlu1 = input1.value;

  if (inputVlu1 > 0 && inputVlu1 < 200) {
    console.log(inputVlu1);
    main1.style.display = "none";
    main2.style.display = "flex";
  } else {
    xato.style.display = "flex";
    return;
  }

  writeWords();
});

btnEnt2.disabled = false;

function writeWords() {
  let num = [];
  let num2 = [];
  let inputV = input1.value;
  let a = [];
  let b = [];

  for (let i = 0; i < inputV; i++) {
    const element1 = texts2[i];
    num.push(element1);
  }
  texts.innerHTML = num.join(" ");

  btnEnt2.addEventListener("click", () => {
    let parosat = input2.value;

    
    for (let i = 0; i < inputV; i++) {
      const element2 = num[i];
      izsz.innerText = `Izlangan Text: ${parosat}`;

      if (element2.includes(parosat)) {
        num2.push(`<mark>${element2}</mark>`);
        btnEnt2.disabled = true;
        a++;
      } else {
        num2.push(element2);
        b++;
      }
    }

    natij.style.display = "flex";
    tpsz.innerText = `Topilgan suzlar: ${a}`;
    bshqsz.innerText = `Boshqa suzlar: ${b}`;

    texts.innerHTML = "";
    texts.innerHTML = num2.join(" ");
  });
}
