//una o varias lineas de codigo que escribo muchas veces
//Bucles son escrtucturas repetitivas

/*document.write("Renglon 1");
document.write("Renglon 2");
document.write("Renglon 3");
document.write("Renglon 4");
document.write("Renglon 5");
document.write("Renglon 6");*/

//3 tipos de bucles: While - Do while - for

//While
/*
while(condicion logica){  si es true o false
    todas las lineas de codigo que quiero repetir varias veces
    agregar un codigo para que la condicion no se cumpla en algun momento
}
*/

let numero = 1;
//document.write("<p>Renglon número "+ numero + "</p>")
while (numero <= 10){
    document.write(`<p>Renglon número ${numero}</p>`); //otra forma de concatenar texto y variable
    numero = numero + 1; //numero++ incrementa solo en 1
}

//Do while
/*
Do {
     todas las lineas de codigo que quiero repetir varias veces
    agregar un codigo para que la condicion no se cumpla en algun momento
}
while (condicion logica)
*/

let contador = 10;
do{
    document.write(`<p>Renglon número ${contador} con do-while</p>`); //otra forma de concatenar texto y variable
    contador = contador - 1; //contador-- decrementa solo en 1
}
while(contador >= 1)

//For
/*
for(inicializo una variable; condicion logica; incremento o decremento de la variable){
    todas las lineas de codigo que quiero repetir varias veces
   }
*/

for(let renglon =1; renglon <=10; renglon = renglon + 1){
    document.write(`<p>Renglon número ${renglon} con for</p>`);
}