// string-- immutable
// array -- mutable
// let names = ["Marjan", "Raj", "Nur"];
// console.log(names);
// let marks = [21, 43, 84, 12, 92];
// console.log(marks);
// console.log(marks[0]);
// marks[1] = 46;
// console.log(marks);

// let heroes = ["Baba", "Ammu", "Teacher", "Family"];
// // //for loop
// // for (let i = 0; i < heroes.length; i++) {
// //   console.log(heroes[i]);
// // }

// // fot of loop use
// for (let hero of heroes) {
//   console.log(hero.toLowerCase());
// }

// average marks

let studentMarks = [91, 81, 83, 78, 79, 85, 87];
let sum = 0;
for (let marks of studentMarks) {
  sum += marks;
}
let avg = sum / studentMarks.length;
console.log(`Average Maarks : ${avg.toFixed(2)}`);

// 10% offer value print

let items = [200, 300, 500, 600, 700];

// for (let val of items) {
//   let offer = val / items.length;
//   items[i] = items[i] - offer;
//   console.log(`Value After Offer :${items[i]}`);
//   i++;
// }
for (let i = 0; i < items.length; i++) {
  let offer = items[i] / items.length;
  items[i] = items[i] - offer;
}
console.log(`Value After Offer :${items}\n`);

//34:40 after start next day
