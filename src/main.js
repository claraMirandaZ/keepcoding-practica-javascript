import {
  printTable,
  numberOfStudents,
  Names,
  removeLastStudent,
  removeRandomStudent,
  girlsInfo,
  numberPerGender,
  girlsBoolean,
  betweenAges,
  addRandomStudent,
  youngestStudent,
  average,
  girlsAvg,
  addRandomScore,
  sort,
} from './functions.js';

import {
  students,
  availableFemaleNames,
  availableMaleNames,
  availableGenders,
  getRandomNumber,
  instructions,
} from './utils.js';

import readline from 'readline';

// Configuración de la utilidad de node.js para que los datos se pidan y se muestren por consola
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Solicitud de un número al usuario (productor)
function getUserNumber() {
  return new Promise((resolve, reject) => {
    rl.question('Introduce una opción a continuación: ', function (num) {
      rl.pause();
      if (parseInt(num)) {
        resolve(num);
      } else {
        reject('Por favor, introduce una opción válida');
      }
    });
  });
}

// Función principal (consumidor). Switch
async function main() {
  let action;
  do {
    try {
      // Si quisiéramos que el enunciado sólo apareciera una vez, al iniciar la aplicación, sacaríamos esta función del bucle
      instructions();
      action = await getUserNumber();
    } catch (error) {
      console.log(error);
    }
    switch (action) {
      case '1':
        // 1. Mostrar en formato de tabla todos los alumnos
        printTable();
        break;
      case '2':
        // 2. Mostrar por consola la cantidad de alumnos que hay en clase
        numberOfStudents();
        break;
      case '3':
        // 3. Mostrar por consola todos los nombres de los alumnos
        Names();
        break;
      case '4':
        // 4. Eliminar el último alumno de la clase
        removeLastStudent();
        break;
      case '5':
        // 5. Eliminar un alumno aleatorio de la clase
        removeRandomStudent();
        break;
      case '6':
        // 6. Mostrar por consola todos los datos de los alumnos que son chicas
        girlsInfo();
        break;
      case '7':
        // 7. Mostrar por consola el número de chicos y chicas que hay en la clase
        numberPerGender();
        break;
      case '8':
        // 8. Mostrar true o false por consola si todos los alumnos de la clase son chicas
        girlsBoolean();
        break;
      case '9':
        // 9. Mostrar por consola los nombres de los alumnos que tengan entre 20 y 25 años
        betweenAges();
        break;
      case '10':
        // 10. Añadir un alumno nuevo con una serie de datos
        addRandomStudent();
        break;
      case '11':
        // 11. Mostrar por consola el nombre de la persona más joven de la clase
        youngestStudent();
        break;
      case '12':
        // 12. Mostrar por consola la edad media de todos los alumnos de la clase
        average();
        break;
      case '13':
        // 13. Mostrar por consola la edad media de las chicas de la clase
        girlsAvg();
        break;
      case '14':
        // 14. Añadir nueva nota a los alumnos.
        addRandomScore();
        break;
      case '15':
        // 15. Ordenar el array de alumnos alfabéticamente según su nombre
        sort();
        break;
    }
  } while (action > 0 && action <= 15);
}

// Llamada a la función
main();
