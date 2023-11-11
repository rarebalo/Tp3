/*6- Solicitar por pantalla al usuario ingresar el valor de 
los lados de un rectángulo, luego crear una función para 
calcular su perímetro y mostrarlo por pantalla.

La fórmula del perímetro  es p = 2*(a +b)

Ejemplo:




Input:
lado A = 24
lado B = 5
Output: 58    */

function perimetroRectangulo(ladoA, ladoB) {
  let perimetro = 2 * (ladoA + ladoB);

  return perimetro;
}

let unLado;
let otroLado;

alert("Vamos a calcular el perimetro de un rectangulo");

unLado = parseInt(prompt("Ingresa el lado mas corto del rectangulo"));
otroLado = parseInt(prompt("Ingresa el lado mas largo del rectangulo"));

if (unLado > otroLado) {
    alert("Esta desobediencia a mis palabras me trae una profunda tristeza y si bien el lado mas corto es mas largo que el largo, lo vamos a calcular igual... ");
} 
alert(
  `El perimetro de tu rectangulo es ${perimetroRectangulo(unLado, otroLado)}`
);
