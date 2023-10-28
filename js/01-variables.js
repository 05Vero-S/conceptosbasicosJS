/* Comentario de mulptiles
lineas*/

// Comentario de unica linea

// Declarar una variable (let-const)

let anioActual = 2023; //guardamos un valor (2023) dentro nuestra variable (anioActual)
const url= "https://universe.rollingcodeschool.com/"; 

//mostrar mensajes
//en consola
console.log(anioActual); //muestro en consola el valor de mi variable
console.log("anioActual"); //muestro en consola el texto
console.log("Año actual: " + anioActual + " hola mundo") //concatenar texto y valor
console.log(url)


//modificar el valor de una variable
anioActual = 2023 + 1;

console.log("Año actual: " + anioActual );

//para mostrar mensaje en nuestro body html

document.write("<h1 class='titulo'>Hola mundo " + anioActual + "</h1>")
document.write("hola mundo <br>");
document.write("hola mundo");

//ventanas emergentes
alert("Esto es un ejemplo de una alerta");

//quiero pedir un numero que ingrese el usuario y luego sumarle 5, por ultimo mostrar el resultado de la suma
const numeroSolicitado = parseInt(prompt("Ingrese un número del 1 al 100")) ; //se crea una ventana emergente. El dato se guarda en la variable numeroSolicitado
console.log(numeroSolicitado);

console.log("Resultado: "+ (numeroSolicitado + 5)); //resultado 105
console.log(numeroSolicitado + 5); // tambien 105
//el prompt acepta tipo de dato text entonces al numero cuando lo ingreso lo pone entre "" (lo hace texto)

//parseInt("numero entero") le saca la comilla al numero
//parseFload("numero decimal")
//esto me devuelve number(o sea un numero)