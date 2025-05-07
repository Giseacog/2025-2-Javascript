const { ask } = require('../helpers/input');

async function main(params) {
   
    const age = Number(await ask('Cuantos anos tiene?'));//primero tranformo en formato string
    const genere = await ask('Cual es tu genero? (Hombre/mujer');

    if ((age >1 || age < 18) && (genere === 'hombre')) { //Aqui entran todos los mayores de edad entran aqui y aca (age>1|| tendria que ser mayor a 1 )
        console.log ('Eres uhnn hombre menor de edad')

    }else if ((age>=18 && age < 65) && (genere === 'hombre ')) {//Todos los menores a 65console.log('Eres un hombre mayor de edad'))
        console.log('Eres un hombre mayor de edad');

    }else{ //Los mayores de 65
        (console.log ('No se cumplen los valores de busqueda'));

    }
    
}