
let vehiculo = {
    kilometroLitro: 0,
    radioLlantas: 0,
    perimetroLlanta: 0,
    girosAceleracion: 0,
    capacidadTanqueLitros: 100,
    cantConbustible: 0,
    aceleracionesAlcanzadas: 0,
    color: "verde chillon",
    estado: false,
    odometro: 0,

    encender(){
        this.tanquearVehiculo();

        if (this.cantConbustible >= 2) {
            this.estado= true,
            console.log(`Estado del vehiculo - encendido: ${this.estado}`);
            console.log("");

        }else if(this.cantConbustible < 2){
            this.estado = false,
            console.log(`Falla de encendido.`);
            console.log(`Estado del vehiculo - encendido: ${this.estado}`);
            console.log(`Razon: conbustible insuficiente.`);

        }

    },

    recorridoXgiroLlanta(){ 
        

        this.radioLlantas = 40,
        this.perimetroLlanta = (2*(Math.PI*this.radioLlantas));
        console.log(`Distancia que recorre por cada giro: ${this.perimetroLlanta.toFixed(2)} cm`);

    },

    tanquearVehiculo(){
        if (this.cantConbustible < this.capacidadTanqueLitros) {
            this.cantConbustible += Math.round(Math.random()*(1,100));

        }else if(this.cantConbustible > this.capacidadTanqueLitros){
            this.cantConbustible = this.capacidadTanqueLitros;

        }
        console.log(`Cantidad de Conbustible: ${this.cantConbustible} Litros`);
        console.log("");
    },

    acelerar(){
        let numRan = Math.round(Math.random()*(1,100));
        this.girosAceleracion = 7;
        console.log(`Numero de aceleraciones: ${numRan}`);
        console.log(`Giros por Aceleracion: ${this.girosAceleracion}`);
        console.log("");
        console.log("REALIZANDO SIMULACION")
        console.log("........................");
        console.log("");
        
        let j = 0;

        for (let i = 0; i < numRan; i++) {
            j++;

            if (this.cantConbustible > 0) {
                this.odometro = this.odometro + (this.perimetroLlanta * this.girosAceleracion);
                this.aceleracionesAlcanzadas++;

            }else if(this.cantConbustible == 0){
                this.apagar();
                numRan = 0;
            }
            
            if (j == 2) {
                this.cantConbustible= this.cantConbustible - 1;
                j = 0;

                if (this.kilometroLitro == 0) {
                   this.kilometroLitro = (this.odometro *(1/100000));
                    
                }
            }

        }
                     
        this.odometro = (this.odometro *(1/100000));
        
        console.log("RESULTADOS");
        console.log("------------");
        console.log(`Aceleraciones Alcanzadas: ${this.aceleracionesAlcanzadas}`);
        console.log(`Kilometros recorridos: ${this.odometro.toFixed(2)} Kilometros`);  
        console.log(`Conbustible restante: ${this.cantConbustible} Litros`); 
        console.log(`Kilometros x Litro: ${this.kilometroLitro.toFixed(2)}Km/1L`);

    },

    apagar(){
        console.log(`Reserva del conbustible agotada`);
        this.estado = false
        console.log(`Estado del vehiculo - encendido: ${this.estado}`);
        console.log("");

    }



}

let NewVehiculo = Object.create(vehiculo);

console.log("");
console.log(`Color del vehiculo: ${NewVehiculo.color}` );
console.log("");

NewVehiculo.encender();
NewVehiculo.recorridoXgiroLlanta();
NewVehiculo.acelerar();
