// Ejercicio 1
 let miNombre
 miNombre = ("Juan Andres")
 console.log(miNombre);
// Ejercicio 2
 let miApellido
 miApellido = ("Alvarez Gonzales")
 console.log(miApellido);
// Ejercicio 3
 let miEdad
 miEdad = 22
 console.log(miEdad);
// Ejercicio 4
 let miMascota
 miMascota = ("Luna")
 console.log(miMascota);
// Ejercicio 5
 let edadMascota
 edadMascota = 10
 console.log(edadMascota);
// Ejercicio 7
 let nombreCompleto
 nombreCompleto = (miNombre + miApellido)
 console.log("nombreCompleto");
 // Ejecicio 8
 let textoPresentacion = {
    Nombre: miNombre,
    Apellido: miApellido,
    Edad: miEdad,
    Mascota: miMascota,
    edadMascota: edadMascota,
    nombreCompleto: nombreCompleto
 }
 console.log(textoPresentacion);
 // ejercicio 9
 let sumaEdades,restaEdades,productoEdades,divisionEdades,calcular;
 
 sumaEdades = ( miEdad + edadMascota )
 console.log("la suma es " + sumaEdades);
 restaEdades = (miEdad-edadMascota)
 console.log("la resta es " + restaEdades);
 productoEdades = (miEdad*edadMascota)
 console.log("el producto es " + productoEdades);
 divisionEdades = (miEdad/edadMascota)
 console.log("la division es " + divisionEdades);
 calcular = (sumaEdades+restaEdades+productoEdades+divisionEdades)
 console.log("el resultado total " + calcular);

// ejercicio 10

miNombre = prompt("ingrese su nombre")
miApellido = prompt("ingrese su apellido")

