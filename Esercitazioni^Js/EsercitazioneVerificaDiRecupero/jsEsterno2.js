let numero = parseInt(prompt("inserisci un numero da 1 a 15"));
if(numero < 15) {
  for (let i = 1;i <= numero; i++){
    console.log(i*i);
}
alert(Math.pow(numero, 3));

} else {
  alert("prova ha inserire un numero pià piccolo")
}