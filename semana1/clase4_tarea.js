// Ejercicio: Pedir al usuario su fecha de nacimiento
//
// Instrucciones:
// 1. Mostrar en pantalla los días equivalentes a la edad actual del usuario
// 2. Mostrar en pantalla los meses equivalentes a la edad actual del usuario
// 3. Mostrar los años que tiene el usuario.

const { ask } = require("../helpers/input");

//diffDays es una funcion que retorna edad En Dias

function diffDays(actualDate, birthDate) {
  const diff = actualDate - birthDate;
  const edadEnDias = Math.floor(diff / (1000 * 60 * 60 * 24));

  return edadEnDias;
}

async function main() {
  const actualDate = new Date();

  const birthDateDay = await ask("¿Cuál es el día de tu fecha de nacimiento?");
  const birthDateMonth = await ask("¿Cuál es el mes de tu fecha de nacimiento?");
  const birthDateYear = await ask("¿Cuál es el año de tu fecha de nacimiento?");
  //const birthDate = await ask("¿Cuál es tu fecha de nacimiento? (formato YYYY-MM-DD)");
  const birthDate = new Date(
    `${birthDateYear}-${birthDateMonth}-${birthDateDay}`
  );
  //DUDA porque no puedo mandar llamar edadEnDias? en la linea 15 entender el SCOPE
  const edadEnDias = diffDays(actualDate, birthDate);
  const edadEnMeses = Math.floor(edadEnDias / 30);
  const edadEnAnos = Math.floor(edadEnDias / 365);


  console.log("Haz vivido aproximadamente: ");
  console.log(`${diffDays(actualDate, birthDate)} días`);
  console.log(`${edadEnMeses} meses`);
  console.log(`${edadEnAnos}anos`);
}

main();
