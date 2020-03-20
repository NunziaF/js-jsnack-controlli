//Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.

//Chiedo all'utente d'inserire cinque numeri
var numero1 = parseInt(prompt("inserisci il primo numero"));
var numero2 = parseInt(prompt("inserisci il secondo numero"));
var numero3 = parseInt(prompt("inserisci il terzo numero"));
var numero4 = parseInt(prompt("inserisci il quarto numero"));
var numero5 = parseInt(prompt("inserisci il quinto numero"));

//Eseguo la somma dei 5 numeri
msg = numero1 + numero2 + numero3 + numero4 + numero5

// output della somma
document.getElementById("somma").innerHTML = "La somma dei 5 numeri inseriti è " + msg;
