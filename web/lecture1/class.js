// class Persona{
//     constructor(nombre,apellido){
//         this.nombre = nombre;
//         this.apellido = apellido;
//     }
//     quienSoy(){
//         console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
//     }
// }
// const merik = new Persona("Merik","x");
// merik.quienSoy();

// class Animal{
//     constructor(nombre){
//         this.velocidad = 0;
//         this.nombre = nombre;
//     }
//     empezoAmoverse(velocidad){
//         this.velocidad = velocidad;
//         return `${this.nombre} se mueve con una velocidad de ${this.velocidad} km/h`;
//     }
//     seDetuvo(){
//         this.velocidad = 0;
//         return `${this.nombre} se detuvo y ahora esta sentado`;
//     }
// }

// // let animal = new Animal("Animal");
// // console.log(animal.empezoAmoverse(20));
// // console.log(animal.seDetuvo());

// class Perro extends Animal{
//     ladra(){
//         return `${this.nombre} esta ladrando `;
//     }
// }

// const chokys = new Perro("Chokys");
// console.log(chokys.ladra());
// console.log(chokys.empezoAmoverse(5));

// class Persona {
//     constructor(nombre, apellido){
//         this.nombre = nombre;
//         this.apellido = apellido;
//     }
//     get nombreCompleto(){
//         return `${this.nombre} ${this.apellido}`
//     }
//     set nombreCompleto(nombre){
//         const partes = nombre.split(" ");
//         this.nombre = partes[0];
//         this.apellido = partes[1];
//     }

// }

// const merik = new Persona("Merik","x");
// const nombreActriz = merik.nombreCompleto;
// console.log(nombreActriz);

// const gio = new Persona();
// gio.nombreCompleto = "Giovani Bobilla";
// console.log(gio);
// const estudiante = gio.nombreCompleto;
// console.log(estudiante); 

// const objetoDePrueba = {
//     nombre: "Merik",
//     get nombreUsuario(){
//         return this.nombre;
//     },
//     set nombreUsuario(nuevoNombre){
//         this.nombre = nuevoNombre;
//     }
// }

// console.log(objetoDePrueba.nombreUsuario);
// objetoDePrueba.nombreUsuario = "gio";
// console.log(objetoDePrueba.nombreUsuario);

// class User{
//     constructor(name){
//         this.name = name;
//     }
//     static staricProperty = "algo";
//     static staticMetod(){
//         console.log(this.name);
//     }
// }

// const usuario = new User("Jorge");
// console.log( User.staricProperty);

// class Animal{
//     constructor(nombre){
//         this.velocidad = 0;
//         this.nombre = nombre;
//     }
//     empezoAmoverse(velocidad){
//         this.velocidad = velocidad;
//         return `${this.nombre} se mueve con una velocidad de ${this.velocidad} km/h`;
//     }
//     seDetuvo(){
//         this.velocidad = 0;
//         console.log(`${this.nombre} se detuvo y ahora esta sentado`);
//     }
// }

// class Perro extends Animal{
//     ladrar(){
//         return `${this.nombre} esta ladrando`;
//     }
//     seDetuvo(){
//         super.seDetuvo();
//         console.log("y se esta lamiendo")

//     }
// }

// const perro = new Perro("chokys");
// perro.seDetuvo();

//"use strict" 
// mensaje = "winton overwat";
// console.log(mensaje);

// a = 10;
// let sumarDos = function(){
//     "use strict";
//     const b = 15;
//     return a +b;
// }
// let resultado = sumarDos();
// console.log(resultado);

//FUNCIONES
"use strict"
function nuevoMensaje(){
    console.log(this === undefined) 
}

const nuevoMensaje =() => {
    console.log(this === undefined)
}
