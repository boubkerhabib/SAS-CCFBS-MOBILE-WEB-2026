let a: number = 10;
let b: number = 20;

console.log("value:");
console.log("a =", a, "b =", b);

a = a + b;
b = a - b;
a = a - b;


console.log("change value:");
console.log("a =", a, "b =", b);