// question 1; Swap 2 variables without using third;
let a = 10;
let b = 20;

b = b - a;
a = a + b;

console.log("a=", a, "b=", b);

// Convert Celsius to Fahrenheit.

let Celsius = prompt("Enter the temperature in celcius:");

let f = (Celsius * 1.4 + 32) ;

alert(`the temperatur in fahrenheit is:${f}` );

// Check if a number is even or odd.


let num = prompt("Enter a number to ceck whether it is even or odd:");

alert(num % 2 ===0 ?"the number is even :":"the number is odd");