//prototipo-clases
//diseño un molde para crear diferentes objetos

class VideoJuego{
    constructor(tituloParam, generoParam, precioParam, etiquetasParam, anioLanzamientoParam, desarrolladorParam){
        this._titulo = tituloParam;
        this._precio = precioParam;
        this.genero = generoParam;
        this.etiquetas = etiquetasParam;
        this.anioLanzamiento = anioLanzamientoParam;
        this.desarrollador = desarrolladorParam;
        //propiedad por defecto
        this.publicado = false;
    }
}

//declaracion de propiedades computadas get y set (para cada propiedad crear un get(obtener) y set(modificar))
//GET nos va a dar el dato que nosotros queremos consultar
get titulo (){
    return this._titulo;
}

get precio (){
    return this._precio;
}

//SET nos va a ayudar a modificar un valor (me invento un parametro)
set titullo (nuevoTitulo){
    if(nuevoTitulo !== ''){
        this._titulo = nuevoTitulo;
    }else{
        alert('Debe ingresar un nuevo titulo');
    }
    
}

//aqui declaro mis metodos
mostrarDatos(){
    document.write(`<ul>
    <li>Titulo: ${this.titulo} </li>
    <li>Precio: ${this.precio} </li>
    <li>Genero: ${this.genero} </li>
    <li>Desarrollador: ${this.desarrollador} </li>
    </ul>`)
}