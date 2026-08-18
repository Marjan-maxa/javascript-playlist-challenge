// string-- immutable
// array -- mutable
let names = ["Marjan", "Raj", "Nur"];
console.log(names);
let marks = [21, 43, 84, 12, 92];
console.log(marks);
console.log(marks[0]);
marks[1] = 46;
console.log(marks);

let heroes = ["Baba", "Ammu", "Teacher", "Family"];
//for loop
for (let i = 0; i < heroes.length; i++) {
  console.log(heroes[i]);
}

// fot of loop use
for (let hero of heroes) {
  console.log(hero.toLowerCase());
}

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
let i = 0;
for (let val of items) {
  let offer = val / items.length;
  items[i] = items[i] - offer;
  console.log(`Value After Offer :${items[i]}`);
  i++;
}
for (let i = 0; i < items.length; i++) {
  let offer = items[i] / items.length;
  items[i] = items[i] - offer;
}
console.log(`Value After Offer :${items}\n`);

//Array methods
let vegitables = ["tomato", "potato", "cucumber", "pepaya"];
let numbers = [75, 86, 76, 91, 85];
console.log(vegitables);
vegitables.push("mango");
console.log(vegitables);
let delated = vegitables.pop();
console.log("Delated vegitable :", delated);

let veg_str = vegitables.toString();
console.log(veg_str);
let num = numbers.toString();
console.log(num);

//concut method

let marvelHeroes = ["Thor", "Ironman", "batman"];
let dcHeroes = ["Spiderman", "Shaktiman", "Padman", "Superman"];
let dhakaHeroes = ["Manna", "Shalman Shah", "Sakib Khan"];
let bestHeroes = marvelHeroes.concat(dcHeroes, dhakaHeroes);

console.log(bestHeroes);

//shif and unshift,slice,splice method works

names = ["Marjan", "Nur", "Raj", "Nahin", "Abdullah"];
names.unshift("Antman");
console.log(names);
let val = names.shift();
console.log(`Deleted Data is :${val}`);

console.log(`${names.slice()}`);

let er = names.splice(1, 2, "Mash", "Hidoy");
console.log(er);
ry = names.splice(0, 0, "Khan");
console.log(names);

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
let deleted = companies.shift();
console.log(`Deleted Data : ${deleted}`);
console.log(companies);
companies.splice(1, 1, "Ola");
console.log(companies);

let valu = companies.push("Amazon");
