// question 1. Write a function to check if a number is prime.

let num = prompt("enter the number to check if it is prime or not:");

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

if (isPrime(num)) {
  console.log("the number is prime");
} else {
  console.log("the number is composite");
}

// question 2.Factorial of a number using recursion.

let numb =  parseInt(prompt("Enter the number to find the factorial of:"));

function factorial(numb){
  if(numb< 0){
    return " factorial is not possible for negative numbers";
  }
  if(numb<=1){
    return 1;
  }
  else{
    return numb*factorial(numb-1);
  }
}

console.log(`factorial of${numb}is${factorial(numb)}`);

// question 3. Write a function to check if a string is a palindrome.

// let str = parseInt(prompt("enter the string that you want to check whether it is palidrome or not:"));

function palidrome(num){
  // let strNum = num.toString();
  return num === num.split('').reverse().join('');
}

console.log(palidrome("123"));