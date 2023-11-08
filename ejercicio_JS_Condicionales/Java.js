// // ejercicios 1,2,3,4
// let num1, num2, num3;
//         num1 = parseInt(prompt('Ingrese el primer número:'));
//         num2 = parseInt(prompt('Ingrese el segundo número:'));
//         num3 = parseInt(prompt('Ingrese el tercer número:'));
//         if (num1 > num2) {
//             document.write('el primer numero es mayor:' + num1);
//             document.write('<br>')
//             document.write('El mayor es:' + num1);
//             document.write('<br>')
//         }
//         else if (num1 == num2){
//             document.write("son iguales")
//             document.write('<br>')
//         }
//          else{
//             document.write('el segundo numero es mayor:' + num2);
//             document.write('<br>')
//             document.write('El mayor es: ' + num2);
//             document.write('<br>');}
        
//         if (num1 == num2) {
//             document.write("son iguales")
//             document.write('<br>')
//         } else {
//             document.write("son diferentes")
//             document.write('<br>')
//         }
//         if (num1<num2 && num1<num3){
//             document.write("el numero uno es menor" + num1)
//             document.write('<br>')
//         } else if (num2<num1 && num2<num3){
//             document.write("el numero dos es menor" + num2)
//             document.write('<br>')
//         } else if (num3<num1 && num3<num2){
//             document.write("el numero tres es menor" + num3)
//             document.write('<br>')
//         } 
// ejercicio 5

let persona1 = {
    nombre: "juan",
    edad: 30,
    altura: 160,
}

let persona2 = {
    nombre: "raul",
    edad: 25,
    altura: 170,
}
edad = parseInt(prompt("ingrese la edad de raul")),
altura = parseInt(prompt("ingrese la altura de raul"))

if (persona1.edad>persona2.edad){
    document.write(" juan es mayor ");
} else if (persona1.edad<persona2.edad) {
    document.write (" raul es mayor ")
} else if (persona1.altura>persona2.altura){
    document.write ("juan es mas alto")
} else if (persona1.altura<persona2.altura) {
    document.write ("raul es mas alto")
}

// NUMERO 8
// Realizar un juego de adivinanza estableciendo un valor entre 1 y 10 en una variable 
// llamada numeroIncognita y que permita en 3 intentos adivinar el numero. 
// El usuario deberá ingresar un numero del 1 al 10 por pantalla en 3 intentos 
// el cual se deberá guardar en una variable llamada numeroIngresado, 
// y en cada intento deberás mostrarle un mensaje al usuario diciendo: 
// “el numero ingresado es mayor, vuelve a intentarlo” o 
// “el numero ingresado es menor, vuelve a intentarlo” o en caso de adivinar, 
// un mensaje que diga: “Ganaste, haz adivinado el numero.” 
// No te preocupes si usas mucho código repetido, 
// mas adelante veraz como realizar este juego de manera mas eficiente.

// let numeroIngresado = prompt("Ingrese un dígito del 1 al 10 para adivinar el número: ");
// numeroIngresado = parseInt(numeroIngresado)
// let numeroIncognita = 3;
// if (numeroIngresado > 10 || numeroIngresado < 1) {
//     console.log("Digíte un número del 1 al 10, gracias.");
// } else if (numeroIngresado == numeroIncognita) {
//     console.log("¡Has ganado! Has adivinado el número correctamente!");    
// } else if (numeroIngresado > numeroIncognita) {
//     console.log("El numero ingresado es mayor, vuelve a intentarlo");
// } else if (numeroIngresado < numeroIncognita) {
//     console.log("El numero ingresado es menor, vuelve a intentarlo");
// } 



// NUMERO 9
// Crear un programa que permita ingresar tu edad y decir si eres un infante (0 a 12 años), 
// adolescente(13 a 18 años), un mayor joven (19 a 45 años) o un anciano (mas de 45 años), 
// y en caso de ingresar una edad mayor a 100 mostrar un mensaje preguntando si en realidad tiene esa edad.

// let edad = prompt("Que edad tienes?")
// parseInt(edad);
// switch (true) {
//     case (edad >= 0 && edad <= 12):
//         console.log("eres un infante")
//         break;
//     case (edad >= 13 && edad <= 18):
//         console.log("eres un adolescente")
//         break;
//     case (edad >= 19 && edad <= 45):
//         console.log("eres un mayor joven")
//         break;
//     case (edad >= 45 && edad <= 100):
//         console.log("eres un anciano")
//         break;
//     default:
//         let resp = prompt("¿en realidad tiene esa edad?")
//         break;
// }



// NUMERO 10
// Crear un programa que permita el ingreso de “PIEDRA”, “PAPEL” o “TIJERAS” 
// a 2 jugadores y muestre en pantalla cual de los 2 ha ganado o si han empatado. 
// En caso de algún ingreso incorrecto mostrar por pantalla que uno de los jugadores ha hecho trampa.

// Ya usted lo tiene






// NUMERO 11
// Realizar un programa que permita el ingreso de un color y utilizando “switch” 
// mostrar por pantalla los siguientes mensajes según las opciones: 
// Blanco o Negro: Falta de color, 
// Verde: El color de la naturaleza, 
// Azul: El color del agua, 
// Amarillo: El color del sol, 
// Rojo: El color del fuego, 
// Marrón: el color de la tierra, 
// y para cualquier otro valor: Excelente elección, no lo teníamos pensado.

// let color = prompt("Ingresa un color");
// switch (true) {
//     case color === "Blanco" || color === "Negro" || color === "blanco" || color === "negro":
//         console.log("Falta de color");
//         break;
//     case color === "Verde" || color === "verde":
//         console.log("El color de la naturaleza");
//         break;
//     case color === "Azul" || color === "azul":
//         console.log("El color del agua");
//         break;
//     case color === "Amarillo" || color === "amarillo":
//         console.log("El color del sol");
//         break;
//     case color === "Rojo" || color === "rojo":
//         console.log("El color del fuego");
//         break;
//     case color === "Marron" || color === "marron" || color === "Marrón":
//         console.log("El color de la tierra");
//         break;
//     default:
//         console.log("Excelente elección, no lo teníamos pensado.");
//         break;
// }





// NUMERO 12
// Realizar un programa que permita el ingreso de 2 valores numéricos y una operación. 
// Según sea la operación ingresada (suma, resta, multiplicación, división) 
// el programa deberá mostrar en pantalla un mensaje junto con el resultado. 
// En caso de haber elegido división realizar 
// la operación siempre que sea posible o mostrar un mensaje de ERROR si el divisor ingresado fue 0.

// let numero1 = prompt("Ingresa el primer dígito a operar:");
// let numero2 = prompt("Ingresa el segundo dígito a operar:");
// numero1 = parseInt(numero1);
// numero2 = parseInt(numero2);
// let operacion = prompt("¿Qué deseas hacer?, digíta el número de acuerdo a la operación que desseas,\nSuma (1)\nResta (2)\nMultiplicación (3)\nDivisión (4)");
// operacion = parseInt(operacion)
// let total = 0;
// if(operacion === 1) {
//     total = numero1 + numero2;
//     console.log(total)
// } else if(operacion === 2) {
//     total = numero1 - numero2;
//     console.log(total)
// } else if(operacion === 3) {
//     total = numero1 * numero2;
//     console.log(total)
// } else if(operacion === 4 && numero2 !== 0) {
//     total = numero1 / numero2;
//     console.log(total)
// } else {
//     console.log('Error: El segundo número ingresado fue 0')
// }





//NUMERO 13
// Crear un programa que permita ingresar todos los datos de tu documento nacional de identidad, 
// mostrar por pantalla un mensaje que imprima todos los datos ingresados y pregunte si están correctos los mismos. 
// En caso afirmativo, crear un objeto llamado dni con todos los datos ingresados y mostrarlos por consola con console.table() 
// mas un mensaje de registro exitoso, en caso de que la persona rechace confirmar los datos, 
// mostrar un mensaje que diga: vuelva a intentarlo en 1 mes.

// let nombreCompleto = prompt("Ingresa el nombre completo");
// let edad = prompt("Ingresa tu edad");
// edad = parseInt(edad);
// let docIdentidad = prompt("Ingresa tu numero de documento");
// docIdentidad = parseInt(docIdentidad);

// window.alert("Su nombre: " + nombreCompleto 
//             + "\nSu edad: " + edad
//             + "\nSu documento de identidad: " + docIdentidad); //Acá muestre estos datos en pantalla, con su window
// let afirmacion = prompt("Los datos están correctos?, digíte \n(1) Sí\n(2) No")
// afirmacion = parseInt(afirmacion);

// if(afirmacion === 1) {
//     console.log("Registro exitoso");
// } else if (afirmacion === 2) {
//     console.log("Vuelva a intentarlo en 1 mes");
// } else {
//     console.log("El número ingresado no estuvo en las opciones, así que inicie el proceso nuevamente")
// }