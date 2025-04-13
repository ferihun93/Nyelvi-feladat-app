import { megoldasok, megoldasok2, megoldasok3 } from "./megoldasok.js";

// Callback függvény az ellenőrzéshez
function ellenorzo(megoldasok, inputElem, key) {
  const ertek = inputElem.value.trim();
  inputElem.classList.remove("helyes", "rossz");

  if (ertek === "") {
    inputElem.classList.add("rossz");
  } else if (ertek === megoldasok[key]) {
    inputElem.classList.add("helyes");
  } else {
    inputElem.classList.add("rossz");
  }
}

// Input mezők feldolgozása
function processInputs(megoldasok, callback) {
  Object.keys(megoldasok).forEach((key) => {
    const inputElem = document.querySelector(`.${key}`);
    if (inputElem) callback(megoldasok, inputElem, key);
  });
}

// Reset művelet
function resetInputs(_, inputElem) {
  inputElem.value = "";
  inputElem.classList.remove("helyes", "rossz");
}

// Megoldások megjelenítése
function felMegoldasok(megoldasok, inputElem, key) {
  inputElem.classList.remove("helyes", "rossz");
  inputElem.value = megoldasok[key];
}

// Művelet- és megoldásleképezés
const muveletek = {
  ellenorzo,
  reset: resetInputs,
  megoldas: felMegoldasok,
};

const megoldasokMap = {
  1: megoldasok,
  2: megoldasok2,
  3: megoldasok3,
};

// Dinamikus eseményfigyelés minden gombra
document.querySelectorAll(".btn").forEach((gomb) => {
  gomb.addEventListener("click", (event) => {
    const megoldasKey = event.target.dataset.megoldas;
    const muveletKey = event.target.dataset.muvelet;

    const aktivMegoldas = megoldasokMap[megoldasKey];
    const callback = muveletek[muveletKey];

    if (aktivMegoldas && callback) {
      processInputs(aktivMegoldas, callback);
    } else {
      console.warn(
        "Hibás vagy hiányzó data attribútum:",
        megoldasKey,
        muveletKey
      );
    }
  });
});

// Valami

const boxes = document.querySelectorAll(".box");
let currentBox = null;
let offsetX, offsetY;

boxes.forEach((box) => {
  box.addEventListener("mousedown", (e) => {
    currentBox = box;
    offsetX = e.clientX - box.offsetLeft;
    offsetY = e.clientY - box.offsetTop;
    box.style.cursor = "grabbing";
  });
});

document.addEventListener("mousemove", (e) => {
  if (currentBox) {
    currentBox.style.left = `${e.clientX - offsetX}px`;
    currentBox.style.top = `${e.clientY - offsetY}px`;
  }
});

document.addEventListener("mouseup", () => {
  if (currentBox) {
    currentBox.style.cursor = "grab";
    currentBox = null;
  }
});
