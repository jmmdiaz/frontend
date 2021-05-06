const { match } = require('assert');
const readline = require('readline');

let Teclado = readline.createInterface({

    input: process.stdin,
    output: process.stdout

});

Teclado.question(`Numero: `, function(data){

    var nuArreglo = [] = data.split("");
    var solucion = 0;


    for (let i = 0; i < nuArreglo.length; i++) {   
        for (let j = 0; j < nuArreglo.length; j++) {
            if (nuArreglo[i] > nuArreglo[j]) {   
                if (nuArreglo[i] > solucion){ solucion = nuArreglo[i] }
            } 
        }          
    }

    console.log(`Numero mayor: ${solucion}`);
    
    Teclado.close();
});