/* 
Para utilizar un import en la solución, hay que recordar que hay que indicarle a node.js que estamos utilizando módulos.
Para eso debemos utilizar un fichero package.json.
*/

export const students = [{
  age: 32,
  examScores: [],
  gender: 'male',
  name: 'Edu'
},
{
  age: 29,
  examScores: [],
  gender: 'female',
  name: 'Silvia'
}]

export const availableFemaleNames = ['Cecilia', 'Ana', 'Luisa', 'Silvia', 'Isabel', 'Virginia'];

export const availableMaleNames = ['Pepe', 'Juan', 'Víctor', 'Leo', 'Francisco', 'Carlos'];

export const availableGenders = ['male', 'female'];