//funciones declaradas
function saludar(){
    //todas las lineas de codigo que quiero hacer para saludar
    document.write('<p>Hola mundo</p>');
}
 //no se ejecuta mi fucnion si no la llamo
function saludoNuevo(nombreIngresado, apellidoIngresado){
    document.write(`<p>Hola ${nombreIngresado}, ${apellidoIngresado}. Que tengas un buen día</p>`);
    
}

/*function sumar(numero1,numero2){
    const resultado=numero1 + numero2;
    console.log(resultado);
    return resultado; //nada despues del return
}*/

//arrow functions tienen q ir arriba por las dudas para que no falle.
const sumar = (numero1, numero2) =>{
    const resultado=numero1 + numero2;
    console.log(resultado);
    return resultado;
}


//Se llama una funcion con el nombre que declaramos 

saludar();

const nombre = prompt("Ingrese un nombre:");
const apellido = prompt("Ingrese un apellido: ");

saludoNuevo(nombre,apellido); //parametros
saludoNuevo('Peter','Parker'); //argumentos
saludoNuevo('Batman');


const valorResultante = sumar(30,28);

document.write(`<p>El resultado de la suma es: ${valorResultante}</p>`);
document.write(`<p>El resultado de la suma es: ${sumar(20,30)}</p>`);


