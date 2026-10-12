// ES6 - Latest
import Product, { add as Addition, subtract as Difference } from "./math.js";
console.log(Addition(20, 30));
console.log(Product(20, 30));
console.log(Difference(50, 30));

// CommonJS
// const MathModule = require("./math.js");
// console.log(MathModule.add(20, 30));
