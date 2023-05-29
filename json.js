// • Crea dos objetos en el mismo formato que presentan los que están contenidos en el Array de la
// variable inicial, guarda cada uno en una variable distinta, y luego utiliza el método push de
// JavaScript para añadirlos a la variable inicial.
const arrayJson = [];
const json1 = '{"nombre":"John", "mascota":"false, "animal":"humano", "edadHumana":30}';
const json2 = '{"nombre":"Ratanas", "mascota":"true", "animal":"gato", "edadHumana":4}';
const json3 = '{"nombre":"Hatsumomo", "mascota":"true", "animal":"gato", "edadHumana":5}';
const json4 = '{"nombre":"Gata Blanca", "mascota":"true", "animal":"perro", "edadHumana":4}';

console.log("Cantidad de objetos inicial: ", arrayJson.length);
arrayJson.push(json1);
arrayJson.push(json2);
arrayJson.push(json3);
arrayJson.push(json4);

console.log("Cantidad de objetos final: ", arrayJson.length);
console.log("Array de objetos: \n", arrayJson);
// • Imprime por consola la cantidad inicial de objetos del Array con el mensaje: “Cantidad de objetos
// inicial: número”, y la cantidad final luego de agregarle los nuevos objetos creados por ti, con el
// mensaje “Cantidad de objetos final: número”. Por último, imprime por consola el Array de objetos
// resultante de tus modificaciones.
