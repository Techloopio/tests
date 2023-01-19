// Example 1:

function map(arr, fn) {
  return arr.map(fn);
}

const numbers = [1, 2, 3];
const double = (n) => n * 2;
console.log(map(numbers, double));

// Add correct typings to the function map



// Example 2:

interface Car {
  model: string;
  tireSize: number;
}

interface Helicopter {
  model: string;
  maxAltitude: number;
  optimalBladeAngle: number;
}

let heli: Helicopter = { model: 'Black Hawk', maxAltitude: 12, optimalBladeAngle: 7.5 };

function updateHeli(heliProps) {
  heli = { ...heli, ...heliProps };
}

// Add typings to heliProps argument - heliProps is object that can have inside one or more properties of Helicopter

// Create an interface Vehicle that can be either a car or a helicopter

// Create an interface FlyingCar that combines both car and helicopter interfaces



// Example 3:

function toString(value) {
  if (Array.isArray(value)) {
    return value.map((val) => val.toString());
  } else {
    return value.toString();
  }
}

// Function toString will return array of strings when passed array argument and string when passed a value.
// Add correct typings/function overloads to make it work with intellisense and other tools.
