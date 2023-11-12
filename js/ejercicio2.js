/*2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas
 en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego
  realizar las siguientes acciones:

  Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

Ejemplo:
 Input:
[‘Nueva York, Estados Unidos’, ‘Barcelona, España’, ‘Tokio, Japón’, ‘Londres, Reino Unido’,
     ‘Roma, Italia’, ‘Pekín, China’, ‘Río de Janeiro, Brasil’, ‘Ámsterdam, Países Bajos’, ‘Sídney, Australia’, ‘El Cairo, Egipto’]

     */
const ciudades = [];
let valorUsuario;
do {
  valorUsuario = prompt("Ingrese ciudades del mundo:");
  if (valorUsuario !== null) {
    valorUsuario = valorUsuario.trim();
  }
  if (valorUsuario !== null && valorUsuario !== "") {
    ciudades.push(valorUsuario);
  }
} while (valorUsuario !== null);

document.write(`<h2> Ciudades del mundo </h2>`);
document.write(`El arreglo tiene ${ciudades.length} elementos <br>`);
document.write(`El primer item de la lista de ciudades es: ${ciudades[0]}<br>`);
document.write(`El tercer item de la lista de ciudades es: ${ciudades[2]}<br>`);
document.write(
  `El ultimo item de la lista de ciudades es: ${
    ciudades[ciudades.length - 1]
  }<br>`
);
ciudades.push("Paris");
document.write(
  `El ultimo item de la lista de ciudades es: ${
    ciudades[ciudades.length - 1]
  }<br>`
);
ciudades.splice(1, 0, "Barcelona");
document.write(`<ul>`);
for (let index = 0; index < ciudades.length; index++) {
  document.write(`<li>${ciudades[index]}</li>`);
}
document.write(`</ul>`);
