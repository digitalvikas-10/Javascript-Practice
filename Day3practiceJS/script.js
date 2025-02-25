// question 1. print fibonacci series upto n terms.


// let n =prompt("Enter the number of terms you want to print in the Fibonacci series:");

// let a =0;
// let b = 1;
// let c;
// for (let i = 0; i <= n; i++) {
//     let c = a+b;
//     a = b;
//     b = c;
//     console.log(a);
// }

// question 2. Count the number of digits in a number.

// let num = prompt("Enter the number to count the number of digit in it:");

// let count = 0;
// while(num!=0){
//     num = Math.floor(num/10);
//     count++;
// }


// question 3. Reverse a number.

function reverseNumberMath(n) {
    let reversed = 0;
    let num = Math.abs(n);
    
    while (num > 0) {
        let lastDigit = num % 10;  // Get last digit
        reversed = reversed * 10 + lastDigit; // Append last digit
        num = Math.floor(num / 10);  // Remove last digit
    }
    return n < 0 ? -reversed : reversed;
    
}

// Example usage:
let n = prompt("enter the number to reverse it:");
console.log(reverseNumberMath(n));  // Output: 54321
console.log(reverseNumberMath(n));  // Output: -6789
