const readline = require('readline');

let Captura = readline.createInterface({

    input: process.stdin,
    output: process.stdout

});


Captura.question(`Ingrese un numero: `, function(data){

    var nuArreglo = [] = data.split("");
    var invArreglo = [];
    var contador = 1;
    var contador2 = parseInt(nuArreglo.length) - 1;

    do {        
        contador = contador - 1;

        invArreglo[contador] = nuArreglo[contador2];

        contador2 = contador2 - 1,
        contador = contador + 2;
        
    } while (contador <= nuArreglo.length);
    
    contador = nuArreglo.toString();
    contador2 = invArreglo.toString();

    if (contador == contador2) {
        console.log(`Es Capicúa`)

    } else {
        console.log(`No es Capicúa`)

    }


    Captura.close();
});