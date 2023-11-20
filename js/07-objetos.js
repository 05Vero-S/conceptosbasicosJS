//OBJETO es una representacion de algo que existe que puede ser tangible o intangible
//para que sea un objeto yo puedo poder describirlo
//modelamos un objeto. caracteristicas que podemos nombrar se llaman PROPIEDADES (par de valores)
//metodos o acciones con las propiedades del auto.

//notacion literal
const usuario = {
    //propiedades clave:valor
    nombre:'Thiago',
    apellido: 'Fiol',
    edad: 14,
    correo:'thiago@gmail.com',
    password: '1235Ab@',
    //metodos: nombre del metodo (lo invento en este caso login)
    login: function (){
        document.write(`<p>El usuario inicio sesión</p>`);
    },
    logout: () =>{
        document.write(`<p>El usuario cerró sesión</p>`);
    }
}

//mostrar un objeto
console.log(usuario);

//para mostrar por pantalla un objeto. no sabe representar por pantalla a mi objeto. solo dice aqui hay un objeto de tipo object
document.write(usuario);
//si quiero mostrar una propiedad de mi usuario: nombre del objeto.propiedad que quiero mostrar
document.write(`<h1>Usuario: ${usuario.nombre}, ${usuario.apellido} </h1>`);
document.write(`<p>Correo: ${usuario['correo']}</p>`); //cuando tenemos que iterar entre las propiedades de un objeto

//Para modificar la propiedad de un objeto
usuario.edad++ //usuario.edad=usuario.edad + 1
document.write(`<p>Edad: ${usuario.edad}</p>`);

//para agregar una propiedad nueva al objeto.
usuario.perfil= 'alguna foto' //si no existe la propiedad nueva al obejto q no tenia en el momento en que lo diseñe. entonces java entiende que estoy agregando propiedades.
document.write(`<p>Perfil: ${usuario.perfil}</p>`);
console.log(usuario);

document.write(`<p>Nombre: ${usuario.Nombre}</p>`); //discrimina entre mayusculas y minusculas. entonces aparece undefined.(prpiedad q no tenemos en ese momentos o mal la sintaxis(mal escritas))
