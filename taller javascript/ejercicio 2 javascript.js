const readline = require('readline');

let Teclado = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});


var arregloNumero = [];

Teclado.question(`Numero: `, function(numero){
    arregloNumero = numero.split("");

    var suma = 0;
    var contador = 0;

    while (contador < arregloNumero.length) {
        suma = suma + parseInt(arregloNumero[contador]);
        contador++;
    }

    console.log(`Suma: ${suma}`);

    Teclado.close();
});