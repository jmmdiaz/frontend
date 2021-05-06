const { match } = require('assert');
const readline = require('readline');

let Teclado = readline.createInterface({

    input: process.stdin,
    output: process.stdout

});

Teclado.question(`Numero: `, function(data){
    var j=true;

    for (var i = 2; i <= data/2; i++) {

        if ((data % i) == 0) {
            j = false;
        
        }
    }

    if(j){
        console.log(`Es primo`);         

    }else{console.log(`No es primo`);}    

    
    Teclado.close();
});