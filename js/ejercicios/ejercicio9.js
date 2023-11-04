//length = cantidad de caracteres de un string (nota el espacio cuenta como un caracter)
//frase.charAt(0); me devuelve el caracter de la posicion que le indique
//toLowerCase me permite traasnformar una palabra toda a minuscula

//frase.toLowerCase
const frase = prompt("Ingrese una frase:").toLowerCase();
console.log(frase.length);
console.log(frase);
console.log(frase.charAt(0)); //me devuelve la h

for(let indiceFrase = 0; indiceFrase < frase.length; indiceFrase++){
    if (frase.charAt(indiceFrase) == 'a'|| frase.charAt(indiceFrase) == 'e' || frase.charAt(indiceFrase) == 'i' || frase.charAt(indiceFrase) == 'o' || frase.charAt(indiceFrase) == 'u'){
        document.write(frase.charAt(indiceFrase))
    }
}
