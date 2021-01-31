// use type inference on array
const carMakers = ["ford", "toyota", "chevy"];

// use type annotation on empty arrays
let animals: string[] = [];

const dates = [new Date(), new Date()];

//2d array
const carsByMake = [["f150"], ["corolla"], ["camoro"]];

// Help with inference when extracing values
const car1 = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
//carMakers.push(100);

// help with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types
const importantDates: (Date | string)[] = ["2030-10-10"];
importantDates.push("2030-10-10");
importantDates.push(new Date());
