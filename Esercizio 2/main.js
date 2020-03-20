//L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.

//Chiedo all'utente d'inserire la prima parola
var parola1 = prompt("inserisci la prima parola");

//Chiedo all'utente d'inserire la seconda parola
var parola2 = prompt("inserisci la seconda parola");

console.log("la prima parola é " + parola1 + " la seconda parola é " + parola2);
console.log("la prima parola ha " + parola1.length + " caratteri");
console.log("la seconda parola ha " + parola2.length + " caratteri");

//Verifico quale delle due parole è la più lunga e quale la più corta

if (parola1.length > parola2.length){
  msg = "La parola con più caratteri è " + parola1 + ", la parola con meno caratteri è" + parola2;
} else if (parola2.length > parola1.length){
  msg = "La parola con più caratteri è " + parola2 + ", la parola con meno caratteri è" + parola1;
} else {
  msg = "Le parole hanno lo stesso numero di caratteri"
}

// output del numero più grande
document.getElementById("parole").innerHTML = msg;
