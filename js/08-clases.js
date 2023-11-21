//prototipo-clases
//diseño un molde para crear diferentes objetos

class VideoJuego{
    #etiquetas; //propiedad privada
    constructor(tituloParam, generoParam, precioParam, etiquetasParam, anioLanzamientoParam, desarrolladorParam){
        this._titulo = tituloParam;
        this._precio = precioParam;
        this.genero = generoParam;
        this.#etiquetas = etiquetasParam;
        this.anioLanzamiento = anioLanzamientoParam;
        this.desarrollador = desarrolladorParam;
        //propiedad por defecto
        this.publicado = false;
    }
    //declaracion de propiedades computadas get y set (para cada propiedad crear un get(obtener) y set(modificar))
//GET nos va a dar el dato que nosotros queremos consultar
get titulo(){
    return this._titulo;
}

 get precio(){
    return this._precio;
}

//SET nos va a ayudar a modificar un valor (me invento un parametro)
set titulo (nuevoTitulo){
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

}

//HERENCIA, aqui se hereda todo(propiedades y todos los metodos)

class JuegoDeSupervivencia extends VideoJuego{
    #protagonista;
    #antagonista;
    constructor(tituloParam, generoParam, precioParam, etiquetasParam, anioLanzamientoParam, desarrolladorParam, protagonistaParam, antagonistaParam){
        //invocar al constructor de la clase padre
        super(tituloParam, generoParam, precioParam, etiquetasParam, anioLanzamientoParam, desarrolladorParam);
        this.#protagonista = protagonistaParam;
        this.#antagonista = antagonistaParam;
    } 

    get protagonista(){
        return this.#protagonista;
    }

    set protagonista(nuevoProtagonista){
        this.#protagonista = nuevoProtagonista

    }
    get antagonista(){
        return this.#antagonista;
    }

    set antagonista(nuevoAntagonista){
        this.#antagonista = nuevoAntagonista

    }

    //metodos
    mostrarInfoExtra(){
        document.write(`<p>Aqui mostraria todo el detalle de los juegos de supervivencia </p>`);
    }

    mostrarDatos(){
        super.mostrarDatos();
        document.write(`<h2>Informacion extra </h2>
        <ul>
        <li>Protaginista: ${this.protagonista} </li>  
        <li>Antaginista: ${this.antagonista} </li>
        
        </ul>`);
    }


}

//puedo agregar los ultimos li directamente copiando todo lo que puse en mostrar datos y queda todo en una lista.
//crear o instanciar un objeto

const minecraft = new VideoJuego('Minecraft','sandbox', 30, ['cubitos','granja','mundo abierto', 'creeper'], 2008, 'Mojang');

minecraft.mostrarDatos();

document.write(`<p>Titulo del juego: ${minecraft.titulo} , precio: $${minecraft.precio} USD </p>`);
document.write(`<p>Etiquetas: ${minecraft.etiquetas} </p>`);


const rust = new JuegoDeSupervivencia('Rust','supervivencia',30,['multijugador','realista','pvp','pve'],2016,'Alguien','Personaje principal','El resto');

console.log(rust)
rust.mostrarDatos();
