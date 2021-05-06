let preguntas = ['Numero: ', 'Digito: '];
let nuArreglo = [];


const Pregunta = (i)  => {
    console.log(preguntas[i]);
}

process.stdin.on('data', (d) => {   
    nuArreglo.push(d.toString().trim()) 

    if(nuArreglo.length < preguntas.length){
        Pregunta(nuArreglo.length)
    }
    else {
        buscar(nuArreglo[0], nuArreglo[1]);
        process.exit();
    }
})

const buscar = (num, b) => {
    resultado = num.indexOf(b)  

    if(resultado != -1){
        console.log(`Se encontro el digito`);
    }
    else {
        console.log('Digito no encontrado');
    }
}

Pregunta(0);