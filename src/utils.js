/* 
Para utilizar un import en la solución, hay que recordar que hay que indicarle a node.js que estamos utilizando módulos.
Para eso debemos utilizar un fichero package.json.
*/

export const students = [
  {
    age: 30,
    examScores: [],
    gender: 'male',
    name: 'Jorge',
  },
  {
    age: 33,
    examScores: [],
    gender: 'female',
    name: 'Lidya',
  },
  {
    age: 20,
    examScores: [],
    gender: 'female',
    name: 'Helena',
  },
  {
    age: 39,
    examScores: [],
    gender: 'male',
    name: 'Nacho',
  },
  {
    age: 44,
    examScores: [],
    gender: 'male',
    name: 'Ángel',
  },
  {
    age: 36,
    examScores: [],
    gender: 'female',
    name: 'Carlota',
  },
  {
    age: 21,
    examScores: [],
    gender: 'female',
    name: 'Esther',
  },
];

export const availableFemaleNames = [
  'Menchu',
  'Lola',
  'Charo',
  'Pilar',
  'Nieves',
];

export const availableMaleNames = [
  'Eduardo',
  'Juan',
  'Ricardo',
  'Víctor',
  'Manu',
];

export const availableGenders = ['male', 'female'];

// Función para calcular un número aleatorio
export function getRandomNumber(min, max) {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  return randomNumber;
}

/*
Cuando ejecutemos la aplicación, aparecerá el listado completo de requisitos. El usuario debe pulsar el número correspondiente a ese requisito para que se ejecute. Una vez la ejecución termine, volveremos a mostrar el listado de requisitos para que el usuario pueda seleccionar otro. En caso de que el usuario pulse el 0 o un número no contemplado, la aplicación terminará.
*/
export function instructions() {
  console.log(
    '\n¿Qué quieres ejecutar?\n',
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
