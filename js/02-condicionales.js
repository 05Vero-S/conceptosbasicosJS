/* condicion simple
if(condicion logica){
 todo el codigo que quiero ejecutar si se cumple la condicion
        alert("mensaje")
}
*/

//solicitar una edad al usuario, si el ususario es mayor a 16 años deberia votar.
//entre 16 y 18 es optativo y mayores de 70
//entre 18 y 70 es obligatorio

//defino una variable
const edad =  parseInt(prompt("Ingrese su edad: "));
if(edad >= 16 && edad < 18 || edad >70){
    alert("Es optativo votar");
}
else{
    if (edad >= 18 && edad <=70){
        alert("Usted debe votar");
    }
    else{
        alert("No podes votar");
    }
     

}