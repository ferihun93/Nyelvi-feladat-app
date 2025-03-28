const megoldasok = {
  fel1_1: "en",
  fel1_2: "e",
  fel1_3: "st",
  fel1_4: "en",
  fel1_5: "t",
  fel1_6: "t",
};

// 📌 Általános függvény, amely végigmegy az összes inputon és végrehajt egy adott műveletet
function processInputs(callback) {
  Object.keys(megoldasok).forEach((key) => {
    let inputElem = document.querySelector(`.${key}`);
    if (inputElem) callback(inputElem, key);
  });
}

// 📌 Ellenőrzés: helyes/rossz osztályok hozzáadása
function Ellenorzo() {
  processInputs((inputElem, key) => {
    let ertek = inputElem.value;
    inputElem.classList.remove("helyes", "rossz"); // Előző osztályok törlése

    if (ertek) {
      if (ertek === megoldasok[key]) {
        inputElem.classList.add("helyes");
      } else if (ertek === undefined || ertek !== megoldasok) {
        inputElem.classList.add("rossz");
      }
    }
  });
}

// 📌 Reset: mezők törlése és osztályok eltávolítása
function Reset() {
  processInputs((inputElem) => {
    inputElem.value = "";
    inputElem.classList.remove("helyes", "rossz");
  });
}

// 📌 Gombok eseménykezelői
document.querySelector(".javito_btn").addEventListener("click", Ellenorzo);
document.querySelector(".reset_btn").addEventListener("click", Reset);
