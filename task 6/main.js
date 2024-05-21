// The forecast today is 293 Kelvin. The value saved to kelvin will stay constant.
const kelvin = 293;

// Celsius is similar to Kelvin — the only difference is that Celsius is 273 degrees less than Kelvin.
const celsius = kelvin - 273;

// Use this equation to calculate Fahrenheit, then store the answer in a variable named fahrenheit.
let fahrenheit = celsius * (9/5) + 32;
// Use the .floor() method from the built-in Math object to round down the Fahrenheit temperature.
fahrenheit = Math.floor(fahrenheit);

// Use console.log and string interpolation to log the temperature in Fahrenheit to the console.
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// Extra practice: Convert celsius to the Newton scale using the equation below
let newton = celsius * (33/100);

// Round down the Newton temperature using the .floor() method
newton = Math.floor(newton);

// Log the temperature in newton to the console using string interpolation
console.log(`The temperature is ${newton} degrees Newton.`);