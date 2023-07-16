// Value is stored in the stack
const name = 'Mahesh';
const age = 30;

// Reference is stored in the heap
const person = {
  name: 'Vikas',
  age: 40,
};

let newName = name;
newName = 'Vishal';

let newPerson = person;
newPerson.name = 'Vikas';

console.log(name, newName); // Mahesh, Vishal
console.log(person, newPerson); // { name: 'Vikas', age: 40 }, { name: 'Vikas', age: 40 }