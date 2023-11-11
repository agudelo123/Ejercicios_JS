/*
4. Realizar un programa que permita decir si un numero es primo. Un numero es primo
si solo es divisible por el valor 1 y por si mismo. Ayuda: Usar la operacion de modulo.
Los numeros solo poseen divisores hasta la mitad del valor del mismo. Ej: 50 tiene
como divisores 1, 2, 5, 10 y 25. No es primo. Con tener mas de 2 divisores el
numero ya no es primo.
5. Realizar un programa que permita dado un numero, mostrar todos sus divisores.
6. Dado un array de 10 elementos, realizar un programa que recorra ese array y
muestre un mensaje por consola con cada uno de los elementos del array.
7. Dado un array de 10 numeros, realizar un programa que muestre por consola el
doble de cada uno de los elementos.
8. Dado un array con al menos 5 objetos comprendidos por un grupo familiar, cada
objeto representa a 1 persona con al menos 4 propiedades, realizar un programa
que muestre un mensaje de presentacion por cada elemento del array.
9. Dado un array de 10 numeros, realizar un programa que recorra el array y solo
muestre los numeros impares.
10. Realizar un programa que permita la entrada de numeros y calcule la suma de los
numeros pares por un lado y los impares por otro, el ingreso de dato finaliza cuando
el usuario ingresa un 0.
11. Dado un array de 10 numeros, realizar un programa que imprima por pantalla el
numero mas grande.
12. Dado un array de 10 numeros, realizar un programa que imprima por pantalla el
numero mas chico.
13. Realizar un programa que permita jugar a piedra papel o tijeras, se debera poder
ingresar los nombres de 2 jugadores. En el bucle del juego se debera pedir 1 a 1 las
manos de cada jugador, y en cada turno se debera seguir jugando solo si se produjo
un empate. Caso contrario mostrar un mensaje con el nombre de la persona
ganadora.
14. Realizar un programa que imprima por consola un triangulo de 5 asteriscos de lado.
15. Realizar un programa que imprima por consola un triangulo de 5 asteriscos de lado
pero invertido.
16. Dado un array de 10 numeros desordenados, realizar un programa que imprima por
pantalla el array ordenado. (NO USAR SORT, solo ciclos FOR)*/


// ejercicio 1
/* 1. Realizar un programa que permita el ingreso de un numero y muestre su tabla de
 multiplicar (Los primeros 10 multiplos).*/
//    let tabla = parseInt(prompt('Ingrese un valor del 1 al 10:', ''));
//         let conta = tabla;
//         for (let f = 1; f <= 10; f++) {
//             console.log(conta + ' ');
//             conta = conta + tabla;
//         }
// ejercicio 2
/* 2. Realizar un programa que permita el ingreso de numeros los cuales se tienen que ir
 acumulando. El ingreso de datos terminara cuando el usuario ingrese un valor 0.*/
// let num,suma
// do {  num = parseInt(prompt("ingrese un numero: "));
//    suma = (suma + num);
//    console.log(num);
// }
// while (num!=0);

// ejercicio 3
// let numeroSecreto = Math.floor(Math.random() * 100) + 1;
// let intentos = 0;
// function adivinarNumero() {
//   let numeroIngresado = parseInt(prompt('Ingresa un número entre 1 y 100:'));

//   if (isNaN(numeroIngresado) || numeroIngresado < 1 || numeroIngresado > 100) {
//     alert('Por favor, ingresa un número válido entre 1 y 100.');
//     return;
//   }
//   intentos++;
//   if (numeroIngresado === numeroSecreto) {
//     alert(`¡Felicidades! Adivinaste el número secreto ${numeroSecreto} en ${intentos} intentos.`);
//   } else if (numeroIngresado < numeroSecreto) {
//     alert('El número es mayor. Intenta nuevamente.');
//     adivinarNumero(); 
//   } else {
//     alert('El número es menor. Intenta nuevamente.');
//     adivinarNumero(); 
//   }
// }
// adivinarNumero();

// ejercicio 4

// function esPrimo(numero) {
//     if (numero <= 1) {
//         return false;
//     }
//     for (let i = 2; i <= numero / 2; i++) {
//         if (numero % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }
// let numero = parseInt(prompt("ingrese un numero: "));
// if (esPrimo(numero)) {
//     console.log(numero + " es un número primo.");
// } else {
//     console.log(numero + " no es un número primo.");
// }

// ejercicio 5

// function mostrarDivisoresOptimizado(numero) {
//     console.log(`Los divisores de ${numero} son:`);

//     for (let i = 1; i <= Math.floor(numero / 2); i++) {
//         if (numero % i === 0) {
//             console.log(i);
//         }
//     }

   
//     console.log(numero);
// }
//  // lo que hace math.floor en el codigo es reducir las iteraciones a la mitad, ya que sabemos que los numero despues de pasar de si mismos dejan de ser divisibles
// let numero = parseInt(prompt("Ingresa un número:"));

// if (isNaN(numero)) {
//     console.log("Por favor, ingresa un número válido.");
// } else {
//     mostrarDivisoresOptimizado(numero);
// }

// // ejercicio 6

// let miArray = ["marcos", "julian", "mario", "gabriel", "lucas", "thomas", "mateo", "laura", "maria", "leidy"];
// for (let i = 0; i < miArray.length; i++) {
//     console.log("Elemento " + (i + 1) + ": " + miArray[i]);
// }

// ejercicio 7

// let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function mostrarDoble(array) {
//   for (let i = 0; i < array.length; i++) {
//     let doble = array[i] * 2;
//     console.log(`El doble de ${array[i]} es: ${doble}`);
//   }
// }
// mostrarDoble(numeros);

// ejercicio 8 

// let familia = [
//     { nombre: "Juan", edad: 35, relacion: "Padre", ciudad: "Ciudad A" },
//     { nombre: "María", edad: 32, relacion: "Madre", ciudad: "Ciudad B" },
//     { nombre: "Carlos", edad: 10, relacion: "Hijo", ciudad: "Ciudad A" },
//     { nombre: "Ana", edad: 8, relacion: "Hija", ciudad: "Ciudad B" },
//     { nombre: "Luis", edad: 60, relacion: "Abuelo", ciudad: "Ciudad C" }
//   ];  
//   function presentarFamilia() {
//     for (let i = 0; i < familia.length; i++) {
//       let persona = familia[i];
//       console.log(
//         `Hola, soy ${persona.nombre}, tengo ${persona.edad} años, soy ${persona.relacion} y vivo en ${persona.ciudad}.`
//       );
//     }
//   }
//   presentarFamilia();

// ejercicio 9

// let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function mostrarimpares(array) {
//       for (let i = 0; i < array.length; i++) {
//         if (array[i] % 2 !== 0) {
//             console.log(array[i]);
//         };
//       }
//     }
//     mostrarimpares(numeros);

// ejercicio 10

// function calcularSumaParesImpares() {
//     let numero;
//     let sumaPares = 0;
//     let sumaImpares = 0;
//     do {
//       numero = parseInt(prompt("Ingrese un número (ingrese 0 para finalizar):"));
//       if (numero !== 0) {
//         if (numero % 2 === 0) {
//           sumaPares += numero;
//         } else {
//           sumaImpares += numero;
//         }
//       }
//     } while (numero !== 0);

//     console.log("Suma de números pares: " + sumaPares);
//     console.log("Suma de números impares: " + sumaImpares);
//   }
//     calcularSumaParesImpares();

// ejercicio 11

// let numeros = [5, 8, 2, 15, 7, 10, 22, 3, 14, 6];
// let numeroMasGrande = numeros[0];
// for (let i = 1; i < numeros.length; i++) {
//     if (numeros[i] > numeroMasGrande) {
//         numeroMasGrande = numeros[i];
//     }
// }
// console.log("El número más grande es: " + numeroMasGrande);

// ejercicio 12

// let numeros = [5, 8, 2, 15, 7, 10, 22, 3, 14, 6];
// let numeroMasChico = numeros[0];
// for (let i = 1; i < numeros.length; i++) {
//     if (numeros[i] < numeroMasChico) {
//         numeroMasChico = numeros[i];
//     }
// }
// console.log("El número más chico es: " + numeroMasChico);

// ejercicio 13

// function obtenerOpcionJugador() {
//     let opcion = prompt("Elige: piedra, papel o tijeras").toLowerCase();
//     while (opcion !== "piedra" && opcion !== "papel" && opcion !== "tijeras") {
//         opcion = prompt("Opción no válida. Elige: piedra, papel o tijeras").toLowerCase();
//     }
//     return opcion;
// }
// function determinarGanador(jugador1, jugador2) {
//     if (jugador1 === jugador2) {
//         console.log("¡Empate!");
//         return true;
//     } else if (
//         (jugador1 === "piedra" && jugador2 === "tijeras") ||
//         (jugador1 === "papel" && jugador2 === "piedra") ||
//         (jugador1 === "tijeras" && jugador2 === "papel")
//     ) {
//         console.log("¡Jugador 1 gana!");
//     } else {
//         console.log("¡Jugador 2 gana!");
//     }
//     return false;
// }
// const jugador1 = prompt("Ingrese el nombre del Jugador 1");
// const jugador2 = prompt("Ingrese el nombre del Jugador 2");
// // Bucle del juego
// let continuarJugando = true;
// while (continuarJugando) {
//     let opcionJugador1 = obtenerOpcionJugador();
//     let opcionJugador2 = obtenerOpcionJugador();

//     console.log(`${jugador1} eligió: ${opcionJugador1}`);
//     console.log(`${jugador2} eligió: ${opcionJugador2}`);

//     continuarJugando = determinarGanador(opcionJugador1, opcionJugador2);
// }

// ejercicio 14

// for (let i = 1; i <= 5; i++) {
//     let linea = '';
//     for (let j = 1; j <= i; j++) {
//         linea += '*';
//     }
//     console.log(linea);
// }

// ejercicio 15

// for (let i = 5; i >= 1; i--) {
//     let linea = '';
//     for (let j = 1; j <= i; j++) {
//         linea += '*';
//     }
//     console.log(linea);
// }

// ejercicio 16

// let numeros = [8, 4, 2, 6, 7, 1, 9, 3, 10, 5];
// console.log("Array desordenado:", numeros);
// function ordenarArray(array) {
//     let n = array.length;
//     for (let i = 0; i < n - 1; i++) {
//         for (let j = 0; j < n - i - 1; j++) {
//             if (array[j] > array[j + 1]) {
//                 let temp = array[j];
//                 array[j] = array[j + 1];
//                 array[j + 1] = temp;
//             }
//         }
//     }
// }
// ordenarArray(numeros);
// console.log("Array ordenado:", numeros);
