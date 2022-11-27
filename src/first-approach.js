import {
  students,
  availableFemaleNames,
  availableMaleNames,
  availableGenders,
} from './utils.js';

/* Requisitos indispensables */
// 1. Mostrar en formato de tabla todos los alumnos.
console.table(students);

// 2. Mostrar por consola la cantidad de alumnos que hay en clase.
console.log('The total number of students is ', students.length);

// 3. Mostrar por consola todos los nombres de los alumnos.
let nameList = students.map((student) => student.name);

nameList.forEach((name) => console.log(name));

// 4. Eliminar el último alumno de la clase.
nameList.pop();

console.log('Removing the last student, the list looks like this:', nameList);

// 5. Eliminar un alumno aleatorio de la clase.
students.splice(Math.floor(Math.random() * students.length), 1);

console.log('Removing a random student, the list looks like this:', students);

// My const students is now different
// 6. Mostrar por consola todos los datos de los alumnos que son chicas.
let girlsList = students.filter((student) => student.gender === 'female');

console.log('All the girls in class are', girlsList);

// 7. Mostrar por consola el número de chicos y chicas que hay en la clase.
let boysList = students.filter((student) => student.gender === 'male');

console.log('Number of girls in class:', girlsList.length);
console.log('And the number of boys:', boysList.length);

// 8. Mostrar true o false por consola si todos los alumnos de la clase son chicas.
let girlsInClass = students.every((student) => student.gender === 'female');

console.log('Are all the students female?', girlsInClass);

// 9. Mostrar por consola los nombres de los alumnos que tengan entre 20 y 25 años.
let youngerStudents = students.filter(
  (student) => student.age >= 20 && student.age <= 25
);
let youngerNames = youngerStudents.map((student) => student.name);

console.log('The younger students are ', youngerNames);

// 10. Añadir un alumno nuevo con los siguientes datos:
//    - Género aleatorio.
let randomGender =
  availableGenders[Math.floor(Math.random() * availableGenders.length)];

//    - Nombre aleatorio.
let randomName =
  randomGender === 'female'
    ? availableFemaleNames[
        Math.floor(Math.random() * availableFemaleNames.length)
      ]
    : availableMaleNames[
        Math.floor(Math.random() * availableFemaleNames.length)
      ];

//    - Edad aleatoria entre 20 y 50 años.
function calculateRandomNumber(min, max) {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
}

let randomAge = calculateRandomNumber(20, 50);

//    - Listado de calificaciones vacío.
// ¡OJO! Nombre y género tienen que ir acordes.
students.push({
  age: randomAge,
  examScores: [],
  gender: randomGender,
  name: randomName,
});

console.log('Add a random student: ', students);

// 11. Mostrar por consola el nombre de la persona más joven de la clase.
// ¡OJO! Si varias personas de la clase comparten la edad más baja, cualquiera de ellos es una respuesta válida.
let studentAges = students.map((student) => student.age);
let youngestAge = Math.min(...studentAges);
let youngestStudent = students[studentAges.indexOf(youngestAge)];
let youngestName = youngestStudent.name;

console.log('The youngest student is', youngestName);

// 12. Mostrar por consola la edad media de todos los alumnos de la clase.
let average = students.reduce((a, b) => a + b.age, 0) / students.length;

// Including the newest random student
console.log("The average of all the students' ages is", Math.round(average));

// 13. Mostrar por consola la edad media de las chicas de la clase.
let totalGirls = students.filter((student) => student.gender === 'female');
let girlsAvg = totalGirls.reduce((a, b) => a + b.age, 0) / totalGirls.length;

console.log("The average of the girls' ages is", Math.round(girlsAvg));

// 14. Añadir nueva nota a los alumnos. Por cada alumno de la clase tendremos que calcular una nota de forma aleatoria (un número entre 0 y 10) y añadirla a su listado de notas.
students.forEach((student) =>
  student.examScores.push(calculateRandomNumber(0, 10))
);

// Including the newest random student
console.log("Students' new scores", students);

// 15. Ordenar el array de alumnos alfabéticamente según su nombre.
console.log('Alphabetical sorting of students:'); // Including the newest random student
console.log(students.sort((a, b) => a.name.localeCompare(b.name)));
