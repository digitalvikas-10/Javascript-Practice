// question 1. print fibonacci series upto n terms.


let n =prompt("Enter the number of terms you want to print in the Fibonacci series:");

let a =0;
let b = 1;
let c;
for (let i = 0; i <= n; i++) {
    let c = a+b;
    a = b;
    b = c;
    console.log(a);
}

// question 2. Count the number of digits in a number.

let num = prompt("Enter the number to count the number of digit in it:");

let count = 0;
while(num!=0){
    num = Math.floor(num/10);
    count++;
}


// question 3. Reverse a number.

