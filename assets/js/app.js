(() => {
  "use strict";
})();

let deck = [];
const tipos = ["C", "D", "H", "S"];
const especiales = ["A", "J", "Q", "K"];
let puntosJugador = 0,
  puntosComputadora = 0;
const btnPedir = document.querySelector("#btnPedir");
const puntosHTML = document.querySelector("small");
const puntosPc = document.getElementById("pc");
const cartasJugador = document.getElementById("jugador-cartas");
const cartasComputadora = document.getElementById("pc-cartas");
const btnDetener = document.getElementById("btn-detener");
const btnReset = document.getElementById("btn-reset");
btnReset.addEventListener("click", () => {
  console.clear();
  deck = creaDeck();
  puntosComputadora = 0;
  puntosJugador = 0;
  puntosHTML.innerHTML = 0;
  puntosPc.innerHTML = 0;
  cartasComputadora.innerHTML = "";
  cartasJugador.innerHTML = "";
  btnDetener.disabled = false;
  btnPedir.disabled = false;
});
btnDetener.addEventListener("click", () => {
  btnDetener.disabled = true;
  btnPedir.disabled = true;
  turnoComputadora(puntosJugador);
});
//Esta funcion crea un nuevo deck
const creaDeck = () => {
  for (i = 2; i <= 10; i++) {
    for (tipo of tipos) {
      deck.push(i + tipo);
    }
  }
  for (esp of especiales) {
    deck.push(esp + tipo);
  }
  deck = _.shuffle(deck);
  return deck;
};

creaDeck();

//Esta funcion me permite tomar una carta
const pedirCarta = () => {
  if (deck.length === 0) {
    throw "no hay mas cartas";
  }
  const carta = deck.pop();
  console.log(deck);
  console.log(carta);
  return carta;
};

//Esta funcion crea el valor de la carta
const valorCarta = (carta) => {
  const valor = carta.substring(0, carta.length - 1);
  return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1;
};

//Turno de la computadora
const turnoComputadora = (puntosMinimos) => {
  do {
    const carta = pedirCarta();
    puntosComputadora = puntosComputadora + valorCarta(carta);
    puntosPc.innerText = puntosComputadora;

    const imgCarta = document.createElement("img");
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList = "carta";
    cartasComputadora.append(imgCarta);
    if (puntosMinimos > 21) {
      break;
    }
  } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

  setTimeout(() => {
    if (puntosComputadora > 21) {
      alert("Gana jugador.");
    } else if (
      puntosMinimos > 21 ||
      (puntosComputadora <= 21 && puntosComputadora > puntosMinimos)
    ) {
      alert("Computadora gana.");
    } else {
      alert("Empate");
    }
  }, 300);
};

//Eventos
btnPedir.addEventListener("click", () => {
  const carta = pedirCarta();
  puntosJugador = puntosJugador + valorCarta(carta);
  puntosHTML.innerText = puntosJugador;

  const imgCarta = document.createElement("img");
  imgCarta.src = `assets/cartas/${carta}.png`;
  imgCarta.classList = "carta";
  cartasJugador.append(imgCarta);

  if (puntosJugador > 21) {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador);
  } else if (puntosJugador === 21) {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador);
  }
});
