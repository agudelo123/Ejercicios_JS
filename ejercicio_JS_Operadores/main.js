// //  Ejercicio 1

//  let miNombre
//  miNombre = ("Juan Andres")
//  console.log(miNombre); 

// // Ejercicio 2

//  let miApellido
//  miApellido = ("Alvarez Gonzales")
//  console.log(miApellido);

// // Ejercicio 3

//  let miEdad
//  miEdad = 22
//  console.log(miEdad);

// // Ejercicio 4

//  let miMascota
//  miMascota = ("Luna")
//  console.log(miMascota);

// // Ejercicio 5

//  let edadMascota
//  edadMascota = 10
//  console.log(edadMascota);

// // Ejercicio 7

//  let nombreCompleto
//  nombreCompleto = (miNombre + miApellido)
//  console.log("nombreCompleto");

//  // Ejecicio 8

//  let textoPresentacion = {
//     Nombre: miNombre,
//     Apellido: miApellido,
//     Edad: miEdad,
//     Mascota: miMascota,
//     edadMascota: edadMascota,
//     nombreCompleto: nombreCompleto}
//  console.log(textoPresentacion);

//  // ejercicio 9

//  let sumaEdades,restaEdades,productoEdades,divisionEdades,calcular;
//  sumaEdades = ( miEdad + edadMascota )
//  console.log("la suma es " + sumaEdades);
//  restaEdades = (miEdad-edadMascota)
//  console.log("la resta es " + restaEdades);
//  productoEdades = (miEdad*edadMascota)
//  console.log("el producto es " + productoEdades);
//  divisionEdades = (miEdad/edadMascota)
//  console.log("la division es " + divisionEdades);
//  calcular = (sumaEdades+restaEdades+productoEdades+divisionEdades)
//  console.log("el resultado total " + calcular);

// // ejercicio 10

// console.log ejercicio 10");
// miNombre = prompt("ingrese su nombre")
// miApellido = prompt("ingrese su apellido")
// miEdad = parseInt(prompt("ingrese su edad"))
// miMascota = prompt("ingrese el nombre de su mascota")
// edadMascota = parseInt(prompt("ingrese la edad de su mascota"))
// console.log(miNombre,miApellido,miEdad,miMascota,edadMascota);
// sumaEdades = ( miEdad + edadMascota )
// console.log("la suma es " + sumaEdades);
// restaEdades = (miEdad-edadMascota)
// console.log("la resta es " + restaEdades);
// productoEdades = (miEdad*edadMascota)
// console.log("el producto es " + productoEdades);
// divisionEdades = (miEdad/edadMascota)
// console.log("la division es " + divisionEdades);
// calcular = (sumaEdades+restaEdades+productoEdades+divisionEdades)
// console.log("el resultado total " + calcular);

// // ejercicio 11

// let alumno = {
//    nombre : "juan",
//    apellido : "gutierrez",
//    edad : "15",
//    aula : "A3",
//    curso : "noveno", }
// console.table(alumno)

// // ejercicio 12

// let mascota = {
//    nombre : "boby",
//   tipodemascota: "perro",
//    edad : "5 años",
//    raza : "doberman",
//    pais: "colombia"
//  }
// console.table(mascota)

// // ejercicio 13
// let 
// frutas = Array("pera","manzana","uvas",
// "mandarina",
// "naranja",
// )
// console.log( frutas);

// // ejercicio 14

// let numeros = Array(15,30,18,25,7,)
// console.log( numeros);

// // ejercicio 15

// let familia = Array("madre","padre","hijo","primo","tio")
// console.log( familia);

// // ejercicio 16

// let textoAletorio = Array(frutas[1],numeros[3],familia[4]); 
// console.log(textoAletorio);

// // ejercicio 17

// let miEdad, edadAmigo;
// edadAmigo= prompt("ingrese su edad")
// miEdad= prompt("ingrese su edad")
// console.log( " mi edad es " + miEdad);
// console.log(" la edad de mi amigo es " + edadAmigo);
// let soyMayor, soyMenor, edadesIguales;
// soyMayor = ( miEdad > edadAmigo) 
// soyMenor = ( miEdad < edadAmigo) 
// edadesIguales = ( miEdad == edadAmigo) 
// console.log("Mi edad es mayor a la de mi amigo: " + soyMayor);
// console.log("Mi edad es menor a la de mi amigo: " + soyMenor);
// console.log("mi edad es igual a la de mi amigo: " + edadesIguales);

// // ejercicio 18

// let miEdad,soyMayorDeEdad, nosoyMayorDeEdad, sonIguales
// miEdad = prompt("ingrese su edad")
// soyMayorDeEdad = (miEdad == 18 || miEdad > 18)
// console.log("eres mayor de edad " + soyMayorDeEdad);
// nosoyMayorDeEdad = (miEdad < 18)
// console.log("no eres mayor de edad " + nosoyMayorDeEdad);

// // ejercicio 19

// let miEdad, suAltura, puedePasar, nopuedePasar
// miEdad = prompt("ingrese su edad")
// suAltura = prompt("ingrese su altura")
// puedePasar = (miEdad >= 6) && (suAltura >= 120)
// console.log(" puede pasar: " + puedePasar);
// nopuedePasar = (miEdad < 6 || suAltura < 120)
// console.log(" no puede pasar: " + nopuedePasar);

// // ejercicio 20

// // console.log(pasa, nopasa);

// let tipodePase, compra, nocompra, resultado, siguiente, puedePasar
// tipodePase = prompt("Bienvenido por favor ingrese que el pase que tiene  1-vip  2-normal  3-limitado   4- no tengo pase ")
// puedePasar = (tipodePase == 1) || (tipodePase == 2) || (tipodePase == 3)
// console.log(" puede pasar: " + puedePasar);
// siguiente = (tipodePase == 4)
// compra = prompt("posee un saldo mayor a 1000 1-si 2-no " )
// compra = (1 == compra)
// console.log(" puede pasar " + compra ) && (siguiente);
// nocompra = (2 == compra)
// console.log("vuelva pronto " + nocompra );
