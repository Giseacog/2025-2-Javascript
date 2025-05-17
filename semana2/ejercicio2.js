const { ask } = require("../helpers/input");

async function main() {
  let opcion = "";
  let frutas = [];
  //mientras opcion sea diferente de 3, entra al menu (if)
  while (opcion !== "3") {
    opcion = await ask(
      `¿Qué deseas hacer?\\n1. Agregar una fruta\\n2. Eliminar una fruta\\n3. Salir`
    );

    if (opcion === "1") {
      let frutaNueva = await ask(
        "Ingresa el nombre de la fruta que quieres agregar: "
      );
      frutas.push(frutaNueva);
      console.log(`Fruta Agregada: ${frutaNueva}`);
      console.log(`Frutas actuales ${frutas}`);
    } else if (opcion === "2") {
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
