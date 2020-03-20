//L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore

//Chiedo all'utente d'inserire il primo numero
var numero1 = parseInt(prompt("inserisci il primo numero"));

//Chiedo all'utente d'inserire il secondo numero
var numero2 = parseInt(prompt("inserisci il secondo numero"));

console.log("il primo numero é " + numero1 + " il secondo numero è " + numero2);

//Verifico quale dei due numeri è il più grande
if (numero1 > numero2){
  msg = "Tra i due numeri il più grande è " + numero1;
} else if (numero1 < numero2){
  msg = "Tra i due numeri il più grande è " + numero2;
} else {
  msg = "I due numeri sono uguali"
}

// output del numero più grande
document.getElementById("numgrande").innerHTML = msg;
