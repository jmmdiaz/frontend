const readline = require('readline');

let Captura = readline.createInterface({

    input: process.stdin,
    output: process.stdout

});

Captura.question(`Numero: `, function(data){

    var nuArreglo = [] = data.split("");

    var contador = nuArreglo.length - 1;

    console.log(`Inverso:`);


    for (let i = 0; i < nuArreglo.length; i++) {
       
        console.log(nuArreglo[contador]);
        contador = contador - 1;
    }

    Captura.close();
});