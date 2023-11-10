/*4- Escribir el código de una función a la que se pasa como parámetro
 un número entero y devuelve como resultado una cadena de texto que
  indica si el número es par o impar. Mostrar por pantalla
   el resultado devuelto por la función.*/
function seraPar(numeroQueConsulta) {
  if (numeroQueConsulta % 2 === 0) {
    return alert("Tu numero es par");
  } else {
    return alert("Tu numero no es par");
  }
}

const numeroDelUsuario = parseInt(
  prompt(`Ingrese un numero entero para comprobar si es par o no:`)
);

seraPar(numeroDelUsuario);