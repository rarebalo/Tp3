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

numeroUsuario = parseInt(prompt("Ingresa el numero con el cual vamos a trabajar: "));

switch (numeroUsuario) {
  case null:
    alert("No hay nada para hacer, por que cancelaste...");
    break;
  case isNaN: 
    alert("Lo que ingresaste no fue un numero...");
    break;
  case Number:
    tablaDeMultiplicar(numeroUsuario,10);
    break;

  default:
    alert("Nose que paso pero lo que ingresaste no fue un numero ni un null ni un no numero :/");
    break;
}

