const { ask } = require("../helpers/input");

async function main() {
  const nombres = ["Ana", "Roberto", "Luis", "Mariana", "Sol"];
  for (let i = 0; i < nombres.length; i++) {
    if (nombres[i].length >= 5) {
      console.log(`${nombres[i]} tiene mas de 5 caracteres`);
    } else {
      console.log(`${nombres[i]} tiene solo ${nombres[i].length} caracteres`);
    }
  }

  const nombres2 = [
    "Oscar",
    "Ana",
    "Luis",
    "Eduardo",
    "Isabel",
    "Maria",
    "Ursula",
  ];

  const vocales = ["a", "e", "i", "o", "u"];

  //1er for recorre el array, y revisa cada nombre hasta que alguno empieza con vocal
  //2do for extrae
  //Busca en el array cual es la misma vocal con la que se esta buscando
  //Si se cumple la ocondicion se mprime la vocal

  for (let a = 0; a < nombres2.length; a++) {
    const primeraLetra = nombres2[a][0].toLowerCase();
    for (let b = 0; b < vocales.length; b++) {
      if (primeraLetra === vocales[b]) {
        console.log(vocales[b]);
      }
    }
  }

  const palabraAlReves = await ask(`escribe un palabra`);
  let resultado = "";
  for (let c = palabraAlReves.length - 1; c >= 0; c--) {
    resultado = resultado + palabraAlReves[c];
  }
  console.log(resultado);
}
main();
