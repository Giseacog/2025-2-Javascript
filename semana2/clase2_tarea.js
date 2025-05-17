// 🏠 Práctica para casa: Gestor interactivo de frutas (variante)
// 🎯 Objetivo:
// Crear un programa que gestione una lista de frutas con opciones para agregar, eliminar, ver la lista completa y salir. El usuario puede interactuar con el menú cuantas veces quiera hasta decidir salir.
//
// 🧩 Instrucciones:
// Crea un arreglo vacío llamado frutas.
//
// Usa un ciclo while que muestre el siguiente menú:
// ¿Qué deseas hacer?
// 1. Agregar fruta
// 2. Eliminar fruta
// 3. Ver lista de frutas
// 4. Salir

const { ask } = require("../helpers/input");

async function main() {
  let opcion = ""; // Se crea opcion en vacio
  let frutas = []; // Arreglo vacio

  //mientras opcion sea diferente de 3, entra al menu (if)
  while (opcion !== "3" ) {
    opcion = await ask (
    `¿Qué deseas hacer?\\n1. Agregar una fruta\\n2. Eliminar una fruta\\n3. Salir`
    );

    //Se desliegan las opciones
    //Empezamos con la primera opcion 1 Agregar una fruta?
    if (opcion === "1") {
        letfrutaNueva = await ask (
    "Ingresa el nombre de la fruta que quieres agregar:")
  };
  frutas.push(frutaNueva); //Sube la fruta
  console.log(`Fruta Agregada: ${frutaNueva}`);
  console.log(`Frutas actuales ${frutas}`); //Agrega la frutaNueva al array de frutas
  //Continuamos con la opcion 2 Eliminar una fruta
} else if (opcion === "2") {
    //Si no hay elementos dentro del array de frutas 
    if (frutas.length === 0){
        console.log ("No hay frutas disponibles");
        continue;
    }else{
        let frutaEliminar = await ask ("¿Qué fruta deseas eliminar?");
        let index = frutas.indexOf(frutaAEliminar);
//Si hay elementos dentro del array de frutas
if (frutas.length === 0) {
    console.log("No hay frutas disponibles");
    continue;

  } else {
    let frutaAEliminar = await ask("¿Qué fruta deseas eliminar?");
    let index = frutas.indexOf(frutaAEliminar);

    if (index !== -1) {
      frutas.splice(index, 1);
      console.log(`${frutaEliminar} ha sido eliminada `)
    } else {
      console.log('Fruta no encontrada ');
    }
    console.log('Frutas disponibles: ', frutas);
  }
} else if (opcion === "3") {
  console.log("Gracias por usar el programa. Tus frutas fueron: ", frutas);
} else {
  console.log("Opción no permitida. Intenta de nuevo");
}
}
}

main();






