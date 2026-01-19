//Inicializacion

function contieneCaracteresEspecialesONumeros(caracter) {
  // Definimos una expresión regular que coincida con cualquier carácter que no sea una letra
  const regex = /[^a-zA-Z]/;
  return regex.test(caracter);
}

let cadenaFinal = "";
let letraRecibida = prompt("Introduce una letra");

while (letraRecibida !== null) {
  if (letraRecibida.length > 1) {
    alert("Solo se puede introducir una letra");
  } else if (contieneCaracteresEspecialesONumeros(letraRecibida)) {
    alert(
      "Solo puedes introducir una letra ,no un numero ni caracter especial"
    );
  } else {
    cadenaFinal = cadenaFinal + letraRecibida;
  }
  letraRecibida = prompt("Introduce otra letra");
  console.log(letraRecibida);
}

alert("Las letras introducidas son " + cadenaFinal);
