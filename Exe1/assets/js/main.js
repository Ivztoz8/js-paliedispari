
//Dichiarazione variabili
let paliWord = prompt("Inserisci una parola: ")

/* Creazione della funzione di controllo */
function paliControl(paliWord){

    // Controllo della lunghezza della parola
    let palilong = paliWord.length;
    // Ciclo for per scorrere metà della parola
    for (let index0 = 0; index0 < palilong/ 2; index0++) {
        //Ciclo if per confrontare la prima parte e l'ultima della parola
        if (paliWord[index0] !== paliWord[palilong - 1 - index0]) {
            return "La parola non è palindroma";
        }
    }
    return "La parola è palindroma";
}

/* Chiedo di inserire una parola attraverso la funzione*/
const risulPali = paliControl(paliWord);

console.log(risulPali);