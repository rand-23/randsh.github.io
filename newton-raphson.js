function f(x) {
 return x * x - 4; // Example function: f(x) = x^2 - 4
}
// Define the derivative of the function.
function df(x) {
 return 2 * x; // Derivative of f(x) = 2x
}

// Define the initial guess for the root.
let x0 = 3;
// Define a tolerance level to stop the iteration when the result is close enough to the root.
const tolerance = 0.0001;
// Maximum number of iterations to prevent infinite looping.
const maxIterations = 100;
// Initialize variables.
let x = x0;
let iterations = 0;
// Perform the Newton-Raphson iteration.
while (Math.abs(f(x)) > tolerance && iterations < maxIterations) {
 // Calculate the next approximation of the root using the formula:
 // x = x - f(x) / f'(x)
 x = x - f(x) / df(x);
 iterations++;
}
// Check if a root was found within the tolerance.

if (Math.abs(f(x)) <= tolerance) {
 console.log(`Root found at x = ${x} after ${iterations} iterations.`);
} else {
 console.log (`Root not found within ${maxIterations} iterations.`);
}
