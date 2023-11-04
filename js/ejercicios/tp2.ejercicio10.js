
const filas = parseInt(prompt("Ingrese las filas: "));
const columnas = parseInt(prompt("Ingrese las columnas: "));

let totalCeldas = filas * columnas; 

document.write(`<table><tbody>`)
for(let indiceFilas = 0; indiceFilas < filas; indiceFilas++){
    document.write(`<tr>`)
    for(let indiceColumnas = 0; indiceColumnas < columnas; indiceColumnas++){
        document.write(`<td>${totalCeldas}</td>`);
        totalCeldas = totalCeldas - 1; // totalCeldas--
    }
    
    document.write(`</tr>`);
}

document.write(`</tbody></table>`)