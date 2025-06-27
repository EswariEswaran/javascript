let num1 = 20;
let num2 = 7;

console.log("=== Arithmetic Operators ===");
console.log("num1 + num2 =", num1 + num2);
console.log("num1 - num2 =", num1 - num2);
console.log("num1 * num2 =", num1 * num2);
console.log("num1 / num2 =", num1 / num2);
console.log("num1 % num2 =", num1 % num2);
console.log("num1 ** num2 =", num1 ** num2); 
let x = 10;
console.log("\n=== Assignment Operators ===");
x += 5;
console.log("x += 5 →", x);
x *= 2;
console.log("x *= 2 →", x);
x -= 4;
console.log("x -= 4 →", x);
x /= 2;
console.log("x /= 2 →", x);
let a = 15;
let b = "15";
console.log("\n=== Comparison Operators ===");
console.log("a == b:", a == b);       
console.log("a === b:", a === b);     
console.log("a != b:", a != b);       
console.log("a !== b:", a !== b);
console.log("a > 10:", a > 10);
console.log("a <= 20:", a <= 20);
Logical Operators
let isActive = true;
let isAdmin = false;
console.log("\n=== Logical Operators ===");
console.log("isActive && isAdmin:", isActive && isAdmin);
console.log("isActive || isAdmin:", isActive || isAdmin);
console.log("!isActive:", !isActive);
let p = 5;  
let q = 3;  
console.log("\n=== Bitwise Operators ===");
console.log("p & q:", p & q);  
console.log("p | q:", p | q);  
console.log("p ^ q:", p ^ q);  
console.log("~p:", ~p);
console.log("p << 1:", p << 1);
console.log("p >> 1:", p >> 1);
let count = 10;
console.log("\n=== Unary Operators ===");
console.log("count++ =", count++);
console.log("After count++:", count);
console.log("++count =", ++count);
console.log("typeof count:", typeof count);
let age = 18;
let access = (age >= 18) ? "Access granted" : "Access denied";
console.log("\n=== Ternary Operator ===");
console.log("User age =", age);
console.log("Access:", access);
let firstName = "Easha";
let lastName = "Z";
console.log("\n=== String Operators ===");
console.log("Full name =", firstName + " " + lastName);
console.log("Length of name =", (firstName + lastName).length);
console.log("\n=== Operator Precedence ===");
let result = 5 + 3 * 2;             
let grouped = (5 + 3) * 2;        
console.log("Without grouping (5 + 3 * 2):", result);
console.log("With grouping ((5 + 3) * 2):", grouped);
function evaluate(a, b) {
  return {
    sum: a + b,
    isEqual: a === b,
    andCheck: (a > 5 && b < 10),
    description: `Values: ${a} and ${b}`
  };
}

console.log("\n=== Function with Interpolation and Logic ===");
let evalResult = evaluate(7, 8);
console.log("Sum:", evalResult.sum);
console.log("Is Equal:", evalResult.isEqual);
console.log("AND Check:", evalResult.andCheck);
console.log(evalResult.description);

console.log("\n=== End of Operator Demonstration ===");
