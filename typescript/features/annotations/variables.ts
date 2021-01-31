// define variables with type annotations
let apples: number = 5;
let speed: string = "fast";
let hastName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ["red", "green", "blue"];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

// Classes
class Car {}
let car: Car = new Car();

// Object literal, define object properties in curly braces
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function: lhs of equal sign is annotation, rhs is actual function definition
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use annotations
// 1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates); //{x: 10, y: 20}

// 2) When we declare a variable on one line
// and initialize it later
let words = ["red", "green", "blue"];
let foundWord: boolean;
for (let word in words) {
  if (word === "green") {
    foundWord = true;
  }
}

// 3) Variable whose type cannot be inferred correctly
// add | to type annotation when variable can have more than 1 type
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
