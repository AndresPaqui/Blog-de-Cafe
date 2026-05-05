// Seleccionar codigo HTML


// querySelector
const heading = document.querySelector('.header__texto h2'); //retorna 0 o 1 elementos 
console.log(heading);

heading.classList.add('tipo');
heading.textContent = "Perro salchicha gordo bachicha";

//querySelectorAll
const enlaces = document.querySelectorAll('.navegacion a' );
enlaces[2].textContent = ('Google');
enlaces[1].classList.add('nueva-clase')
enlaces[1].classList.remove('nueva-clase');

// Generar un nuevo enlace 

const nuevoEnlace = document.createElement('A');

// Agregar href
nuevoEnlace.href = 'https://www.amazon.com/';

//Agregar la clase 
nuevoEnlace.classList.add('navegacion__enlace')

// Agregar el texto
nuevoEnlace.textContent = 'Amazon'

//Agregarlo al documneto 
const navegacion = document.querySelector('.navegacion')
navegacion.appendChild(nuevoEnlace);

console.log(nuevoEnlace);

//Eventos

// document.addEventListener('DOMContentLoaded', function () { //Solo espera a que se desacargue el HTML, pero no espera Css ni imagenes
//     console.log(4);
// })

// window.addEventListener('load', imprimir())
// function imprimir() {
//     console.log(2);
// }


// window.onload = function (){
//     console.log(3)
// }




// window.onscroll = function (){
//     console.log('scrolling...')
// }

//Seleccionar elementos y asociarles un evento 

// const btnAccion = document.querySelector('.boton--primario');

// btnAccion.addEventListener('click', function(evento){
//     console.log(evento);
//     evento.preventDefault();
//     console.log('enviando formulario...');
// })



//Eventos de los Inputs y Textarea

const datos = {
    nombre: '',
    email: '',
    mensaje: '',
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

//El evento de Submit
formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    //Validar el formulario 

    const { nombre, email, mensaje } = datos;

    if(nombre === '' || email === '' || mensaje === '') {
        alerta('Todos los campos son obligatorios', 'error')

        return;
    }

    alerta('El formulario fue enviado correctamente');
    
    //Enviar el formulario

    console.log('Enviando Formulario...');
}); 

function leerTexto (e){
    // console.log(e.target.value);

    datos[e.target.id] = e.target.value;

    // console.log(datos);
}

//Mostrar alerta en pantalla
function alerta(mensaje, error){
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    if(error) {
        alerta.classList.add('error');
    }else {
        alerta.classList.add('correcto');
    }

    formulario.appendChild(alerta);

    //Desaparecer luego de 5 segundos
    setTimeout(() => {
        alerta.remove();
    }, 5000)
}


