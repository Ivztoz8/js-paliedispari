/* Creo un Array vuoto */
//Dichiarazione variabili
let vArray = [];
let sumNum4Arr= 0;
let sumNumlimit = 50;
let numPushArr;


// Chiedere all'utente un numero, fintanto che la somma degli elementi 
// è minore di 50, inserisci il numero nell'Array vuoto
while(sumNum4Arr < sumNumlimit){
    numPushArr = parseInt(prompt("Inserisci un numero: "));
    vArray.push(numPushArr);
    sumNum4Arr += numPushArr;
    console.log(vArray);
}

console.log(sumNum4Arr);