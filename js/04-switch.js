//cuando estamos usando muchos if (anidando 5,6, etc) no se considera buenas practicas usamos entonces Switch

//si el usuario presiona 1 consulte el saldo, 2 extraer dinero, 3 ingresar dinero;
let saldo = 1000;
const opcion = parseInt(
  prompt(
    "Seleccione una opción: 1- consultar el saldo, 2- extraer dinero, 3- ingresar dinero"
  )
);

/*if (opcion === 1) {
  //console.log("debo mostrar el saldo");
  console.log("Saldo disponible: " + saldo);
} else if (opcion === 2) {
  //console.log("extraer el dinero");
  const montoExtraer = parseFloat(prompt("Ingrese el monto a extraer: "));
  if (montoExtraer > 0 && montoExtraer <= saldo) {
    saldo = saldo - montoExtraer;
    console.log("Operacion exitosa");
    console.log("Saldo disponible: " + saldo);
    document.write("<p>Operacion exitosa</p>");
    document.write("Saldo disponible: " + saldo);
  } else {
    alert("Monto invalido");
    console.log(saldo);
  }
} else if (opcion === 3) {
  //console.log("ingresar dinero");
  const montoIngresar = parseFloat(prompt("Ingrese el monto"));
  if (montoIngresar > 0) {
    saldo = saldo + montoIngresar;
    console.log("Operacion exitosa");
    console.log("Saldo disponible: " + saldo);
    document.write("<p>Operacion exitosa</p>");
    document.write("Saldo disponible: " + saldo);
  } else {
    alert("Ingrese un monto mayor a cero (0)");
  }
} else {
  alert("ingresó una opcion invalida");
}*/

//Estructura switch usamos cuando tenemos muchos if anidados y cuando tengamos un ejercicio que parece un menu.que parece una lista de opciones

switch (opcion) {
    //case 'saldo':
    //case 'consultar saldo': estas opciones tmb son validas puedo poner varias opciones que ejecutan la misma opcion
    //case '1':
  case 1:
    console.log("Saldo disponible: " + saldo);
    document.write("Saldo disponible: " + saldo + "<br>");
    break; //hasta aca se ejecuta el caso 1
  case 2:
    const montoExtraer = parseFloat(prompt("Ingrese el monto a extraer: "));
    if (montoExtraer > 0 && montoExtraer <= saldo) {
      saldo = saldo - montoExtraer;
      console.log("Operacion exitosa");
      console.log("Saldo disponible: " + saldo);
      document.write("<p>Operacion exitosa</p>");
      document.write("Saldo disponible: " + saldo);
    } else {
      alert("Monto invalido");
      console.log(saldo);
    }
    break;
  case 3:
    const montoIngresar = parseFloat(prompt("Ingrese el monto"));
    if (montoIngresar > 0) {
      saldo = saldo + montoIngresar;
      console.log("Operacion exitosa");
      console.log("Saldo disponible: " + saldo);
      document.write("<p>Operacion exitosa</p>");
      document.write("Saldo disponible: " + saldo);
    } else {
      alert("Ingrese un monto mayor a cero (0)");
    }
    break;
  default: //cualquier cosa diferente a los case, el codigo ejecuta por defecto
    alert("ingresó una opcion invalida");
}
