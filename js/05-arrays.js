//arrays es una lista de elementos (muchos).
//no les interesa el tipo de datos

//Declarar un array
const productos = []; //alt+91 corchetes. caracteristica de arrays vacio. que indica que no tiene datos todavia.

//declarar un array que si tengo los datos
const juegos = [
  "counter-strike",
  "Minecraft",
  2023,
  true,
  "valorant",
  "half-life",
  "lol",
]; //tengo 7 elementos en mi array

function mostrarJuegos(titulo) {
  document.write(`<h2> ${titulo} </h2>`); //cuando invoque mi funcion juegos voy a tener que introducir un dato.
  document.write(`<ul>`);
  for (let i = 0; i < juegos.length; i++) {
    document.write(`<li>${juegos[i]}</li>`);
  }
  document.write(`</ul>`);
}

const mostrarArray = (arreglo, titulo) => {
  document.write(`<h2> ${titulo} </h2>`);
  document.write(`<ul>`);
  /*for (let i = 0; i < juegos.length; i++) {
    document.write(`<li>${juegos[i]}</li>`);
  }*/
  //map metodo inmutable (renderizar algo nuevo). mostrar en pantalla un li. aplicarle algo a cada elemnto del array pero no quiero modificar el original.
  arreglo.map((item) => document.write(`<li>${item}</li>`));
  document.write(`</ul>`);
};

console.log(juegos.length); //me devuelve siempre cantidad de elementos

document.write(juegos);
console.log(juegos);

document.write(`<p>El primer juego es ${juegos[0]}</p>`);
document.write(`<p>El primer juego es ${juegos[juegos.length - 1]}</p>`);
document.write(`<p>juego de la posicion 20 ${juegos[20]}</p>`);

mostrarJuegos("Lista de juegos");

//agregar elementos al array

//al principio UNSHIFT uno o varios elementos
juegos.unshift("god of war", "Street fighter");
mostrarJuegos("Lista de juegos + 2 juegos extras");

/*document.write('<h2>Lista de juegos + 2 juegos extras</h2>');
document.write(`<ul>`);
for(let i= 0; i<juegos.length; i++){
    document.write(`<li>${juegos[i]}</li>`);
}
document.write(`</ul>`);*/

//agregar en el medio SPLICE y tmb se lo usa para eliminar elemntos del array
juegos.splice(6, 0, "Dark Souls");
mostrarJuegos(`Lista de juegos + 1, cantidad total (${juegos.length})`);

/*document.write(`<h2>Lista de juegos + 1, cantidad total (${juegos.length})</h2>`);
document.write(`<ul>`);
for(let i= 0; i<juegos.length; i++){
    document.write(`<li>${juegos[i]}</li>`);
}
document.write(`</ul>`);*/

//agregar al final del array PUSH
juegos.push("Mortal kombat");
mostrarJuegos(`Lista de juegos + 1, cantidad total (${juegos.length})`);

/*document.write(`<h2>Lista de juegos + 1, cantidad total (${juegos.length})</h2>`);
document.write(`<ul>`);
for(let i= 0; i<juegos.length; i++){
    document.write(`<li>${juegos[i]}</li>`);
}
document.write(`</ul>`);*/

//como modificamos los elementos de un array
juegos[5] = "Stardew valley";
mostrarJuegos(
  `Lista de juegos, modificamos un elemento del array (${juegos.length})`
);

/*document.write(`<h2>Lista de juegos, modificamos un elemento del array (${juegos.length})</h2>`);
document.write(`<ul>`);
for(let i= 0; i<juegos.length; i++){
    document.write(`<li>${juegos[i]}</li>`);
}
document.write(`</ul>`);*/

//eliminar elementos de un array
juegos.shift(); //elimina el primer elemento del array
mostrarJuegos(`Lista de juegos -1 elemento del array (${juegos.length})`);

/*document.write(`<h2>Lista de juegos -1 elemento del array (${juegos.length})</h2>`);
document.write(`<ul>`);
for(let i= 0; i<juegos.length; i++){
    document.write(`<li>${juegos[i]}</li>`);
}
document.write(`</ul>`);*/

//eliminar un elemento del medio de mi array
juegos.splice(3, 1);
mostrarJuegos(`Lista de juegos -1 elemento del array (${juegos.length})`);

/*document.write(`<h2>Lista de juegos -1 elemento del array (${juegos.length})</h2>`);
document.write(`<ul>`);
for(let i= 0; i<juegos.length; i++){
    document.write(`<li>${juegos[i]}</li>`);
}
document.write(`</ul>`);*/

//borrar de a varios elementos
/*juegos.splice(3,3);
document.write(`<h2>Lista de juegos -3 elemento del array (${juegos.length})</h2>`);
document.write(`<ul>`);
for(let i= 0; i<juegos.length; i++){
    document.write(`<li>${juegos[i]}</li>`);
}
document.write(`</ul>`);*/

//para borrar todo el array sería array.splice(0);

//eliminar el ultimo elemento del array POP
juegos.pop();
mostrarJuegos(`Lista de juegos -1 elemento del array (${juegos.length})`);

/*document.write(`<h2></h2>`);
document.write(`<ul>`);
for(let i= 0; i<juegos.length; i++){
    document.write(`<li>${juegos[i]}</li>`);
}
document.write(`</ul>`);*/

juegos.push(
  "Mortal Kombat 1",
  "Mortal Kombat 2",
  "Mortal Kombat 3",
  "Mortal Kombat 1"
);
mostrarJuegos("Agregamos nuevos jueguitos");

//Para filtrar elemntos de un array. FILTER metodo inmutable (no modifica al array) me retorna un nuevo arreglo
console.log(juegos[8]);
console.log(juegos[8].includes("Kombat")); //includes me devuelve true o false.

//const juegosMKT = juegos.filter((juego) => juego === 'Mortal Kombat 1') //necesito como argumento funciones anonimas
const juegosMKT = juegos.filter((juego) => juego.includes("Kombat"));
console.log(juegosMKT);
//si la condicion de filter no se cumple siempre me devuelve un array vacio []. 


mostrarArray(juegosMKT,'Familia de juegos de MKT');

//FIND se lo utiliza para encontrar solo un elemento dentro del array. si no lo encuentra al elemento que estoy buscando me devuelve indefinido (undefined)

const juegoBuscado = juegos.find(itemJuego => itemJuego.includes('Minecraft'));
const juegoBuscado2 = juegos.find(itemJuego => itemJuego.includes('PES'));

document.write(`<p>Juego buscado: ${juegoBuscado}</p>`);
/*if (juegoBuscado2 !== undefined{
    document.write(`<p>Juego buscado: ${juegoBuscado2} </p>`);
}else{
    document.write(`<p>Juego buscado: No se encontró el juego buscado</p>`);
}) */

//OPERADOR TERNARIO
// (condicion logica)? toda la logica si se cumple la condicion :(seria el else)la logica si no se cumple la condicion
//al resultado del ternario lo puedo guardar en una variable
const respuesta = (juegoBuscado2 !== undefined)? juegoBuscado2 : 'No se encontró el termino buscado';
document.write(`<p>Juego buscado: ${respuesta}</p>`);

//si tengo varios mismos elementos. find no. Solo nos devuelve UNO.