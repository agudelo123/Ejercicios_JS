// ejercicios 1,2,3,4
let num1, num2, num3;
        num1 = parseInt(prompt('Ingrese el primer número:'));
        num2 = parseInt(prompt('Ingrese el segundo número:'));
        num3 = parseInt(prompt('Ingrese el tercer número:'));
        if (num1 > num2) {
            document.write('el primer numero es mayor:' + num1);
            document.write('<br>')
            document.write('El mayor es:' + num1);
            document.write('<br>')
        }
        else if (num1 == num2){
            document.write("son iguales")
            document.write('<br>')
        }
         else{
            document.write('el segundo numero es mayor:' + num2);
            document.write('<br>')
            document.write('El mayor es: ' + num2);
            document.write('<br>');}
        
        if (num1 == num2) {
            document.write("son iguales")
            document.write('<br>')
        } else {
            document.write("son diferentes")
            document.write('<br>')
        }
        if (num1<num2 && num1<num3){
            document.write("el numero uno es menor" + num1)
            document.write('<br>')
        } else if (num2<num1 && num2<num3){
            document.write("el numero dos es menor" + num2)
            document.write('<br>')
        } else if (num3<num1 && num3<num2){
            document.write("el numero tres es menor" + num3)
            document.write('<br>')
        } 
// ejercicio 5

let persona1 = 
    nombre = ("juan");
    apellido = ("restrepo");

let persona2 = 
    nombre = ("juan");
    apellido = ("restrepo");
    console.log(persona1 && persona2);
