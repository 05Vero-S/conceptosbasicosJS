//arrays es una lista de elementos (muchos). 
//no les interesa el tipo de datos

//Declarar un array
const productos = [];  //alt+91 corchetes. caracteristica de arrays vacio. que indica que no tiene datos todavia.

//declarar un array que si tengo los datos
const juegos = ['counter-strike', 'Minecraft', 2023, true, 'valorant','half-life','lol']; //tengo 7 elementos en mi array

console.log(juegos.length); //me devuelve siempre cantidad de elementos

document.write(juegos);
console.log(juegos);

document.write(`<p>El primer juego es ${juegos[0]}</p>`);
document.write(`<p>El primer juego es ${juegos[juegos.length - 1]}</p>`);
document.write(`<p>juego de la posicion 20 ${juegos[20]}</p>`);

document.write('<h2>Lista de juegos</h2>');
document.write(`<ul>`);
for(let i= 0; i<juegos.length; i++){
    document.write(`<li>${juegos[i]}</li>`);
}
document.write(`</ul>`);

//agregar elementos al array

//al principio UNSHIFT uno o varios elementos
juegos.unshift('god of war', 'Street fighter')
document.write('<h2>Lista de juegos + 2 juegos extras</h2>');
document.write(`<ul>`);
for(let i= 0; i<juegos.length; i++){
    document.write(`<li>${juegos[i]}</li>`);
}
document.write(`</ul>`);

//agregar en el medio SPLICE y tmb se lo usa para eliminar elemntos del array
juegos.splice(6, 0,'Dark Souls');
document.write(`<h2>Lista de juegos + 1, cantidad total (${juegos.length})</h2>`);
document.write(`<ul>`);
for(let i= 0; i<juegos.length; i++){
    document.write(`<li>${juegos[i]}</li>`);
}
document.write(`</ul>`);

//agregar al final del array PUSH
juegos.push('Mortal kombat');
document.write(`<h2>Lista de juegos + 1, cantidad total (${juegos.length})</h2>`);
document.write(`<ul>`);
for(let i= 0; i<juegos.length; i++){
    document.write(`<li>${juegos[i]}</li>`);
}
document.write(`</ul>`);

//como modificamos los elementos de un array
juegos[5] = 'Stardew valley' 
document.write(`<h2>Lista de juegos, modificamos un elemento del array (${juegos.length})</h2>`);
document.write(`<ul>`);
for(let i= 0; i<juegos.length; i++){
    document.write(`<li>${juegos[i]}</li>`);
}
document.write(`</ul>`);