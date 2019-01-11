let css = document.getElementsByClassName("p1")[0];
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let button = document.getElementById("button");
let buttonL = document.getElementsByClassName("left")[0];
let buttonR = document.getElementsByClassName("right")[0];



function setGradient() {
  body.style.background = "linear-gradient(to right, " 
  + color1.value + ", " + color2.value + ")";
  css.textContent = color1.value.toUpperCase() 
  + "\xa0 to  \xa0" + color2.value.toUpperCase();
}

function getRandome() {
  return '#' + (function co(lor) {
    return (lor += [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'][Math.floor(Math.random() * 16)]) && (lor.length === 6) ? lor : co(lor);
  })('');
}



function randomize () {
	color1.value = getRandome();
	color2.value = getRandome();
	setGradient();
}

function br () {
    color2.value = getRandome();
    setGradient();
}

function br1 () {
    color1.value = getRandome();
    setGradient();
}



color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", randomize);

buttonL.addEventListener("click", br1);

buttonR.addEventListener("click", br );