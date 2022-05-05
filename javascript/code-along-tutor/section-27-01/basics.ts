// Primitives: number, string, boolean
let age: number;

age = 12;

let userName: string;

userName = 'An';

let isStudent: boolean;

isStudent = true;

// More complex types

let hobbies: string[];

hobbies = ['Sports', 'Cooking'];

// Type Alias
type Person = {
  name: string;
  age: number;
}

let person: Person;

person = {
  name: 'An',
  age: 33
}

// person = {
//   isSomething: true
// }

let people: Person[];

// Type inference

let course  = 'React - The complete guide';
// course = 1;
// Union types
let course2: string | number = 'React - The Complete Guide';
course2 = 1;


// Functions & Types

function add(a: number, b: number) {
  return a + b;
}

function print(value: any) {
  console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, 0);
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd');
