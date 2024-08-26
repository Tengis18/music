const drum = new Audio("Event exercise/sounds/tom-1.mp3");
const buttom = document.getElementById("w");
buttom.addEventListener("click", playAudio);
function playAudio() {
  drum.cloneNode().play();
}

const druw = new Audio("./tom-2.mp3");
const buttol = document.getElementById("a");
buttol.addEventListener("click", playAudio1);
function playAudio1() {
  druw.cloneNode().play();
}

const buttos = document.getElementById("s");
const drup = new Audio("./tom-3.mp3");
buttos.addEventListener("click", playAudio2);
function playAudio2() {
  drup.cloneNode().play();
}

const dru = new Audio("./tom-4.mp3");
const butto = document.getElementById("d");
butto.addEventListener("click", playAudio3);
function playAudio3() {
  dru.cloneNode().play();
}

const drumm = new Audio("./snare.mp3");
const buttomo = document.getElementById("j");
buttomo.addEventListener("click", playAudio4);
function playAudio4() {
  drumm.cloneNode().play();
}

const drume = new Audio("./crash.mp3");
const buttome = document.getElementById("k");
buttome.addEventListener("click", playAudio5);
function playAudio5() {
  drume.cloneNode().play();
}

const buttomm = document.getElementById("l");

buttomm.addEventListener("click", playAudio6);
const drumu = new Audio("./kick-bass.mp3");
function playAudio6() {
  drumu.cloneNode().play();
}

window.addEventListener("keydown", function printKey(event) {
  if (event.key == "w") {
    drum.cloneNode().play();
  } else if (event.key == "a") {
    druw.cloneNode().play();
  } else if (event.key == "s") {
    drup.cloneNode().play();
  } else if (event.key == "d") {
    dru.cloneNode().play();
  } else if (event.key == "j") {
    drumm.cloneNode().play();
  } else if (event.key == "k") {
    drume.cloneNode().play();
  } else if (event.key == "l") {
    drumu.cloneNode().play();
  }
});
