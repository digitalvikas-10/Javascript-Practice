// Question 1. Find the largest and smallest numbers in an array.

let array = [54, 2, 3, 4, 5, 6, 6, 7, 8, 995, 5, 45, 4];

let max = array[0];
let min = array[0];
for (let i = 1; i < array.length; i++) {
  if (array[i] > max) {
    max = array[i];
  } else if (array[i] < min) {
    min = array[i];
  }
}

console.log(`the largest number is ${max} and the smallest number is ${min}`);

// Question 2. Remove duplicates from an array.

let duplicates = [
  1, 2, 1, 12, 3, 4, 3, 4, 3, 2, 1, 3, 5, 5, 67, 7, 8, 8, 8, 2, 3, 3, 3, 4,
];

// let unique = [...new Set(duplicates)];

// console.log(unique);
let map = new Map();
console.log(duplicates.filter((item) => !map.has(item) && map.set(item, true)));

// question 3.Reverse an array.

let Reverse = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let reversed = Reverse.reverse();
// console.log(reversed);

// for (let i = 0; i < Reverse.length / 2; i++) {
//   let temp = Reverse[i];
//   Reverse[i] = Reverse[Reverse.length - 1 - i];
//   Reverse[Reverse.length - 1 - i] = temp;
// }
// console.log(Reverse);


for (let i = Reverse.length - 1; i >= 0; i--) {
  console.log(Reverse[i]);
}
