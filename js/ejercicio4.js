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
if (Number.isNaN(numeroDelUsuario)) {
  alert(" Em… tu ‘número’ no es número… por el momento sólo hemos sido provisto con la capacidad de determinar si es par o no de números.");
} else {
  seraPar(numeroDelUsuario);
}

//Quiero validar que el usuario ingrese solamente numeros enteros, pero no lo logro, segun mi logica deberia funcionar de la siguiente manera

/*if (Number.isNaN(numeroDelUsuario)) {
  alert(" Em… tu ‘número’ no es número… por el momento sólo hemos sido provisto con la capacidad de determinar si es par o no de números.");
} else if (!Number.isInteger(numeroDelUsuario)) {
  alert("Em... tu 'número' no es entero...");
} else {
  seraPar(numeroDelUsuario);
}*/