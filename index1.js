/*
Fabio Ford Campbell G-22

11.Registro de Eventos
Implementa una clase "Evento" que tenga propiedades como "nombre del evento", "fecha" y "ubicación". Desarrolla funciones que permitan agregar, 
editar y eliminar eventos en un registro de eventos. Además, crea una función que liste todos los eventos por fecha.*/ 


class Evento{
    constructor(nombre, fecha, ubicacion, id){

        //Declaracion de atributos
        let _nombre;
        let _fecha;
        let _ubicacion;
        let _id;

        //Getter de atributos
        this.getNombre= () => _nombre;
        this.getFecha= () => _fecha;
        this.getUbicacion= () => _ubicacion;
        this.getId = () => _id;

        //Validacion de atributos(Setter)
        this.setNombre = function(nuevoNombre){
            if (typeof nuevoNombre  === "string"){
                _nombre = nuevoNombre;
            }
            else{
                throw new Error("El tipo de dato esperado es 'string'");
            }
        };
        
        
        this.setFecha = function(nuevaFecha){
            if (nuevaFecha instanceof Date){
                _fecha = nuevaFecha;
            }
            else{
                throw new Error("El tipo de dato esperado es 'Date'")
            }    
        } ;

        this.setUbicacion = function(nuevaUbicacion){
            if (typeof nuevaUbicacion == "string"){
                _ubicacion = nuevaUbicacion;
            }
            else{
                throw new Error("El tipo de dato esperado es 'string'");
            }
        } ;

        this.setId = function(nuevaId){
            if(typeof nuevaId == "number"){
                _id = nuevaId;
            }
            else{
                throw new Error(" El tipo de dato esperado es 'number'");
            }
        }
        
        //Asignacion de atributos 
        this._nombre = this.setNombre(nombre);
        this._fecha = this.setFecha(fecha);
        this._ubicacion = this.setUbicacion(ubicacion);
        this._id = this.setId(id);

        //Testeo de atributos
        function imprime(){
            console.log(_nombre +" "+ _fecha +" "+ _ubicacion);
        }

        this.mostrarDatos = () => imprime();

    }
}

class Registro{
    constructor(eventos){
        //Declaracion de atributos
        let _eventos; 

          //Getter de atributos
          this.getEventos = () => _eventos;
        

         //Validacion de atributos(Setter)
        this.setEventos = function(eventos){
            if(Array.isArray(eventos)){
                _eventos = eventos;
            }
            else{
                throw new Error("El tipo de dato esperado era 'array");
            }
        }

         //Asignacion de atributos
        this.setEventos(eventos);

       

        //Metodos de la clase
        this.agregarEvento = function(evento){
            if(evento instanceof Evento){
                this.getEventos().push(evento);
            }
            else{
                throw new Error("La clase esperada como parametro es 'Evento");
            }
        }

        this.editarEvento = function(id, nuevoNombre, nuevaFecha, nuevaUbicacion){
            let found = false;
            for(let i = 0; i < this.getEventos().length && !found; i++){
                if(this.getEventos()[i].getId() === id){
                    found = true;
                    this.getEventos()[i].setNombre(nuevoNombre);
                    this.getEventos()[i].setFecha(nuevaFecha);
                    this.getEventos()[i].setUbicacion(nuevaUbicacion);
                }
            }
        }

        this.eliminarEvento = function(id){
            for(let i = 0; i < this.getEventos().length; i++){
                if(this.getEventos()[i].getId() === id){
                    let aux = this.getEventos().indexOf(this.getEventos()[i]);
                    this.getEventos().splice(aux,1);
                }
            }
        }
        
        this.enlistarEventos = function(){
            let aux = [];
            let position = -1;
            let eventos = this.getEventos();
            while(eventos.length !=0){
                let minValue = Math.min();
                for(let i = 0; i < eventos.length; i++){
                    if(eventos[i].getFecha().getTime() < minValue){
                        minValue = eventos[i].getFecha().getTime();
                        position = i;
                    }
                }
                let evento = new Evento(eventos[position].getNombre(), eventos[position].getFecha(), eventos[position].getUbicacion(), eventos[position].getId());
                eventos.splice(position, 1);
                aux.push(evento);
            }
            this.setEventos(aux);
        }

        //Testeo de Id
        function mostrarEventos(){
            for(let i = 0; i < _eventos.length; i++){
                console.log(_eventos[i].getNombre() +" "+_eventos[i].getFecha()+" "+_eventos[i].getUbicacion()+" "+_eventos[i].getId());
            }
        }
        this.imprime = () => mostrarEventos();
    }
}


//---------------------------------------------------------------------------------------------------------------------------

//Fechas
let anno2023 = new Date(2023,10,15, 16, 30, 0);
let anno2022 = new Date(2022,10,15, 16, 30, 0);
let anno2021 = new Date(2021,10,15, 16, 30, 0);
let anno2020 = new Date(2020,10,15, 16, 30, 0);
//Eventos
let evento = new Evento("Papafrancisco", anno2023, "La Habana", 1234567);
let evento1 = new Evento("francisco", anno2022, "Mayabeque", 12345);
let evento3 = new Evento("cisco", anno2021, "Cienfuegos", 123);
let evento4 = new Evento("co", anno2020, "Artemisa", 1);
arrayEvento = [evento, evento1, evento3];

//Registro de Eventos
let registro = new Registro(arrayEvento);

//Testeo
evento.mostrarDatos();
evento1.mostrarDatos();
evento3.mostrarDatos();
console.log("-----------------------------------------------------------------------------------------------------")

registro.imprime();
console.log("-----------------------------------------------------------------------------------------------------")

registro.agregarEvento(evento4);
registro.imprime();
console.log("-----------------------------------------------------------------------------------------------------")

registro.editarEvento(1, "nuevoNombre", anno2023, "nuevaUbicacion");
registro.imprime();
console.log("-----------------------------------------------------------------------------------------------------")

registro.eliminarEvento(1);
registro.imprime();
console.log("-----------------------------------------------------------------------------------------------------")

registro.enlistarEventos();
registro.imprime();
console.log("-----------------------------------------------------------------------------------------------------")



