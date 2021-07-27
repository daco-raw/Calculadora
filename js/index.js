

const displayValorAnterior = document.querySelector('.valor-anterior');
const displayValorActual = document.querySelector('.valor-actual');
const numberButton = document.querySelectorAll('.number');
const buttonOperator = document.querySelectorAll('.operador');
const borrar = document.querySelector('.borrar');
const borrarTodo = document.querySelector('.boton-c');


const display = new Display(displayValorAnterior,displayValorActual);


numberButton.forEach(button => {
 	button.addEventListener('click', () => display.agregarNumero(button.innerHTML));
})

borrar.addEventListener('click', () => display.borrar());

borrarTodo.addEventListener('click', () => display.borrarTodo());

buttonOperator.forEach(button => {
	button.addEventListener('click', () => display.computar(button.value));
})

