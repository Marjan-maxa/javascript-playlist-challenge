// lecture 5 -- function and methods

function display(msg) {
  // msg called parameter
  console.log(msg);
}

display("I learn js Everyday"); // this is called arguments

function sum(a, b, c) {
  console.log(`The Sum of three numbers is : ${a + b + c}`);
}
sum(10, 20, 30);

function day(x, y) {
  // scope define ; x scope of body, like local variables of function ;  block scope
  console.log(x);
  s = x + y;

  return s;
}

let val = day(10, 3);
console.log(val);

let g = 75;

// it is arrow function. This is modern js features
const multiply = (e, f) => {
  return e * f;
};

// count noumber of  vowel

function vowelCount(str) {
  let count = 0;
  for (const vall of str.toLowerCase()) {
    if (
      vall === "a" ||
      vall === "e" ||
      vall === "i" ||
      vall === "o" ||
      vall === "u"
    ) {
      count++;
    }
  }
  console.log(count);
}

// same task , but using arrow function
const vowCount = (str) => {
  let count = 0;
  for (const vall of str.toLowerCase()) {
    if (
      vall === "a" ||
      vall === "e" ||
      vall === "i" ||
      vall === "o" ||
      vall === "u"
    ) {
      count++;
    }
  }
  console.log(count);
};

// methods ,  forEach loop
// **** forEach loop is akinnd of higher order method / higher order method
//   ||
//  function as a parameter
// functin as a return
let arr = ["Marjan", "Nur", "Rakib", "Raj", "Abdullah"];
console.log("The Values of Arrow are :");
arr.forEach((va, index, array) => {
  console.log(va.toUpperCase(), index, array);
});

// numbers of square of array
//..................................

numbers = [5, 7, 9];
numbers.forEach((numm) => {
  console.log(numm * numm);
});

// same work
numbers = [5, 7, 9];
let results = (numm) => {
  console.log(numm * numm);
};
numbers.forEach(results);

// ever number filter

let allNumbers = [1, 2, 3, 4, 5, 6, 7, 8];
let evenNumbers = allNumbers.filter((even) => {
  return even % 2 === 0;
});
console.log(evenNumbers);

//reduce method
let digit = [1, 2, 3, 4, 5];
let output = digit.reduce((pre, current) => {
  return pre > current ? pre : current;
});
console.log(output);

//filter greter than  90

let num1 = [75, 82, 93, 67, 90, 91];
let newArray = num1.filter((va) => {
  return va > 90;
});
console.log(newArray);

let n = prompt("Enter a number : ");
let array1 = [];
for (let i = 1; i <= n; i++) {
  array1[i - 1] = i;
}
console.log(array1);

let calculate = array1.reduce((pre, curr) => {
  return pre + curr;
});
console.log("Sum is  : ", calculate);

let calculate2 = array1.reduce((pre, curr) => {
  return pre * curr;
});
console.log("Product/factorial is  : ", calculate2);
