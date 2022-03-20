/* Dichiarazione dei valori; costanti e booleani*/
const pari = 1;
const dispari = 0;

//Chiedo all'utente di scegliere tra pari e dispari
let booleanPD = (prompt("Scegli tra pari o dispari:"));
if (booleanPD == pari){
    booleanPD = 1;
}
else if (booleanPD == dispari) {
    booleanPD = 0;
}
console.log(booleanPD);

//Chiedo all'utente di scegliere tra pari e dispari
let numPlayer =  parseInt(prompt("Scegli un numero da 1 a 5:"));  

/* Esecuzione */

// Sommiamo i due numeri
let numPc = randomNumber(5);
let sumTot = numPc + numPlayer;
//console.log(numPc);
console.log(sumTot);

/* Funzioni */
// Generiamo un numero randomico
function randomNumber(max){
return Math.floor(Math.random() * max) + 1;
}

// Stabiliamo se la somma dei due numeri è pari o dispari
function pariDispari(){
    if ((sumTot % 2) == 0 ) {
        sumTotVal = pari;
        return console.log(sumTot);
    }
    else if ((sumTot % 2) != 0 ) {
        sumTotVal = dispari;
        return console.log(sumTot);
    }
}

// Stabiliamo chi ha vinto
function winnerIs(){
    if (booleanPD == sumTotVal){
        return alert("Hai scommesso bene, hai vinto.");
    }
    else if (booleanPD != sumTotVal)  {
        return alert("Hai scommesso male, hai perso, ritenta!"); 
    }
}

/* Esecuzione 2*/

// Eseguiamo le ultime due funzioni
pariDispari();
winnerIs();


