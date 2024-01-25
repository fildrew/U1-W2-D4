/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

function area(l1, l2) {
  let areaRectangle = l1 * l2;
  return areaRectangle;
}
console.log(area(5, 10));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
function crazySum(a, b) {

  if (a === b) {
    return (a + b) * 3;
  } else {
    return a + b;
  }
}

console.log(crazySum(6, 5));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
function crazyDiff(Num) {
  const Difference = Math.abs(Num - 19);
  if (Num > 19) {
    return Difference * 3;
  } else {
    return Difference;
  }
}
console.log(crazyDiff(20));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
function boundary(n) {
  let trueOrFalse = (n >= 20 && n <= 100) || n === 400 ? "True" : "False";
  return trueOrFalse;
}
console.log(boundary(7));


/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
function epify(str) {
  if (str === "EPICODE") {
    return "EPICODE ";
  } else {
    let epicodeFront = "EPICODE";
    return epicodeFront + " " + str;
  }
}

console.log(epify("School"));
console.log(epify("EPICODE"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
function check3and7(positiveNumber) {
  if ((positiveNumber > 0 && positiveNumber % 3 === 0) || positiveNumber % 7 === 0) {
    return "Is multiple of 3 or 7";
  } else {
    return "Is not multiple of 3 or 7";
  }
}

console.log(check3and7(50));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
function reverseString(str) {
  const strReversed = str.split("").reverse().join("");
  return strReversed;
}

console.log(reverseString("EPICODE"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/


/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
function giveMeRandom (n) {
    let arraywithNums = [];
    for (i = 0; i < n.length; i++) {
        arraywithNums.push(Math.floor(Math.random() * 10));
    }
    return arraywithNums;    
}

console.log(giveMeRandom(3));
/* SCRIVI QUI LA TUA RISPOSTA */
