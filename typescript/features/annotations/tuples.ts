const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

// tuples are arrays with strict ordering of elements, denoted by type annotation or by defining type alias
type Drink = [string, boolean, number];
const pepsi: [string, boolean, number] = ["brown", true, 40];
const sprite: Drink = ["clear", true, 40];

// this will give error
//pepsi[0] = 40;
