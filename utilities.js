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

export function calculateRandomNumber(min, max) {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  return randomNumber;
}
