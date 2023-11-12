/*5- Definir una función que muestre información sobre
 una cadena de texto que se le pasa como argumento.
  A partir de la cadena que se le pasa, la función
   determina si esa cadena está formada sólo por
    mayúsculas, sólo por minúsculas o por una mezcla de ambas.*/

function cadenaMayusculasOMinusculas(cadenaConsulta) {
  let mayusculas;
  let minusculas;

  for (let index = 0; index < cadenaConsulta.length; index++) {
    if (cadenaConsulta[index].toUpperCase() === cadenaConsulta[index]) {
      mayusculas = true;
    } else {
      minusculas = true;
    }

    if (mayusculas && minusculas) {
      return alert(
        "Tu cadena de texto esta formada por una combinacion de mayusculas y minusculas"
      );
    }
  }
  if (mayusculas) {
    return alert("Tu cadena de texto esta formada por mayusculas");
  } else {
    return alert("Tu cadena de texto esta formada por minusculas");
  }
}

let cadenaDelUsuario = prompt(
  "Ingrese una cadena de texto para verifica si esta compuesta por mayusculas, minusculas o una combinacio"
).trim();

if (!Number.isNaN(parseInt(cadenaDelUsuario)) || cadenaDelUsuario === "") {
  alert(
    "Lo ingresado no son letras por lo tanto no puedo determinar si esta compuesto por mayusculas o minusculas"
  );
} else {
  cadenaMayusculasOMinusculas(cadenaDelUsuario);
}
