/*7- Escriba un script que muestre la tabla de multiplicar
 de un número ingresado por pantalla, la creación de la 
 tabla debe ser realizada con una función y mostrar solo
  los resultados del 1 al 10 del número elegido por el usuario.*/
function tablaDeMultiplicar(numeroMultiplica, hasta) {
  const resMultiplicacion = new Array(hasta).fill(0);
  for (let index = 0; index < hasta; index++) {
    resMultiplicacion[index] = (index + 1) * numeroMultiplica;
  }
  for (let index = 0; index < resMultiplicacion.length; index++) {
    document.write(
      `${index + 1} x ${numeroUsuario} = ${resMultiplicacion[index]} <br>`
    );
  }
}

let numeroUsuario = 0;
alert(
  "Vamos a crear la tabla de multiplicar del numero que vas a elegir vos..."
);

numeroUsuario = parseInt(
  prompt("Ingresa el numero con el cual vamos a trabajar:")
);

tablaDeMultiplicar(numeroUsuario,10);