//funciones declaradas
function saludar(){
    //todas las lineas de codigo que quiero hacer para saludar
    document.write('<p>Hola mundo</p>');
}
 //no se ejecuta mi fucnion si no la llamo
function saludoNuevo(nombreIngresado, apellidoIngresado){
    document.write(`<p>Hola ${nombreIngresado}, ${apellidoIngresado}. Que tengas un buen día</p>`);
    
}


//Se llama una funcion con el nombre que declaramos 

saludar();

const nombre = prompt("Ingrese un nombre:");
const apellido = prompt("Ingrese un apellido: ");

saludoNuevo(nombre,apellido); //parametros
saludoNuevo('Peter','Parker'); //argumentos
saludoNuevo('Batman');