// • Define dos variables.
let variable1 = 0;
let variable2 = 5;

// • Muestra esas variables por consola usando “console.log()”.
console.log("Variable 1: ", variable1);

// • Define un método de ejemplo que realice una petición a una base de datos, e implementa el uso
// de una función de callback que muestre por consola la respuesta.

async function cargarDatos() {
	const resultados = await fetch("https://jsonplaceholder.typicode.com/todos/1")
		.then((resultados) => {
			const jsonPromesa = resultados.json();
			jsonPromesa.then((datos) => {
				console.log("Datos 2:", datos);
			});
			return datos;
		})
		.catch((err) => {
			console.log(err);
		});
	return datos;
}

const datos = cargarDatos();
console.log("Datos 1:", datos);

// • Puedes elegir cualquier orden para tus “console.log()”, luego de eso, especifica el orden en que se
// mostrarán por pantalla.
console.log("Variable 2: ", variable2);

