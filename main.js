const megoldasok = {
  fel1_1: "en",
  fel1_2: "e",
  fel1_3: "st",
  fel1_4: "en",
  fel1_5: "t",
  fel1_6: "t",
};

// Callback függvény az ellenőrzéshez
function ellenorzo(inputElem, key) {
  const ertek = inputElem.value.trim(); // Az input értéke, levágott szóközökkel
  inputElem.classList.remove("helyes", "rossz"); // Előző osztályok eltávolítása

  // Ha az input üres, akkor is rossz válasznak számít
  if (ertek === "") {
    inputElem.classList.add("rossz");
  } else if (ertek === megoldasok[key]) {
    inputElem.classList.add("helyes"); // Helyes válasz esetén
  } else {
    inputElem.classList.add("rossz"); // Rossz válasz esetén
  }
}

function processInputs(callback) {
  Object.keys(megoldasok).forEach((key) => {
    const inputElem = document.querySelector(`.${key}`);
    if (inputElem) callback(inputElem, key); // Meghívja a callbacket az input mezőn
  });
}

// Ellenőrzés gomb
document.querySelector(".javito_btn").addEventListener("click", () => {
  processInputs(ellenorzo);
});

// Reset gomb
function resetInputs(inputElem) {
  inputElem.value = ""; // Az input értékének törlése
  inputElem.classList.remove("helyes", "rossz"); // Az osztályok eltávolítása
}
function felMegoldasok(inputElem, key) {
  inputElem.classList.remove("helyes", "rossz");
  inputElem.value = megoldasok[key];
}

document.querySelector(".reset_btn").addEventListener("click", () => {
  processInputs(resetInputs);
});

document.querySelector(".megoldas_btn").addEventListener("click", () => {
  processInputs(felMegoldasok);
});
