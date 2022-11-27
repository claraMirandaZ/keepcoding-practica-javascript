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
  calculateRandomNumber,
} from './utilities.js';

import readline from 'readline';

/*
Cuando ejecutemos la aplicación, aparecerá el listado completo de requisitos. El usuario debe pulsar el número correspondiente a ese requisito para que se ejecute. Una vez la ejecución termine, volveremos a mostrar el listado de requisitos para que el usuario pueda seleccionar otro. En caso de que el usuario pulse el 0 o un número no contemplado, la aplicación terminará.
*/
function instructions() {
  console.log(
    '¿Qué quieres ejecutar?\n',
    '1. Mostrar todos los alumnos en formato de tabla.\n',
    '2. Mostrar por consola la cantidad de alumnos que hay en clase.\n',
    '3. Mostrar por consola todos los nombres de los alumnos.\n',
    '4. Eliminar el último alumno de la clase.\n',
    '5. Eliminar de la clase un alumno aleatorio.\n',
    '6. Mostrar por consola todos los datos de los alumnos que son chicas.\n',
    '7. Mostrar por consola el número de chicos y chicas que hay en la clase.\n',
    '8. Mostrar true o false por consola si todos los alumnos de la clase son chicas.\n',
    '9. Mostrar por consola los nombres de los alumnos que tengan entre 20 y 25 años.\n',
    '10. Añadir un alumno nuevo con los siguientes datos: nombre aleatorio, edad aleatoria entre 20 y 50 años, género aleatorio y listado de calificaciones vacío.\n',
    '11. Mostrar por consola el nombre de la persona más joven de la clase.\n',
    '12. Mostrar por consola la edad media de todos los alumnos de la clase.\n',
    '13. Mostrar por consola la edad media sólo de las chicas de la clase.\n',
    '14. Añadir nueva nota a los alumnos. Por cada alumno de la clase tendremos que calcular una nota de forma aleatoria (entre 0 y 10) y añadirla a su listado de notas.\n',
    '15. Ordenar el array de alumnos alfabéticamente, según su nombre.\n'
  );
}

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
