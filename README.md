## Esercizio

**Consegna**
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
**Bonus**
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:

- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

## Soluzione

1. Preparo html e css

2. Raccolgo i dati:

- button play

3.  3.1 Generare 16 bombe casuali comprese nel range del gioco (usa un array). 100 / 81 / 49.
    3.2 Definire il numero max di tentativi 100 o 81 o 49 - 16.
    3.3 Array di numeri non bombe cliccate dall'utente per avere il punteggio. Oppure creare un variabile che incrementa ogni volta che clicco su una non bomba.
    3.4 creo un ciclo for per inserie le celle,
    una funzione per craere le celle
    3.5 e una fuznione per cambiare il colore delle celle quando ci clicco:

- function generateGridCell(innerNumber) {
  const newcell = document.createElement("div");
  newcell.classList.add("cell");
  newcell.innerHTML = innerNumber;
  return newcell;
  }

-function heandleCell (){
this.classList.add("lightgreen");
console.log(this.innerHtml);
}

- for (let i = 0; i < 100; i++){
  const cell = generateGridCell(i);
  cell.addEventListener("click", handleCell)
  }

  3.6 Modifica la funzione HeandleCell {
  leggere il numero cliccato
  if numero.includes(bombe) {
  cella diventa rossa
  fine gioco (un'altra funzione) utente perde
  }
  else {
  cella diventa azzurra/verde
  incremento il mio contatore oppure aggiungo il numero all'array di non bombe SE non già presente
  if (lunghezza array non bombe = numero massimo consentito) {
  fine il gioco (funzione) utente vince
  }}

Modifica la funzione HeandleCell {
leggere il numero cliccato
if numero.includes(bombe) {
cella diventa rossa
fine gioco (un'altra funzione) utente perde
}}
else {
cella diventa azzurra/verde
incremento il mio contatore oppure aggiungo il numero all'array di non bombe SE non già presente
if (lunghezza array non bombe = numero massimo consentito) {
fine il gioco (funzione) utente vince
}
}
