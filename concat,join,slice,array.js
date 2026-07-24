// concat() - add two or more arrays and return a new array
// join() - convert an array to a single line
// slice() - copy part of an array
// Array.isArray() - check weather a value is an array (true/false)

// concat():
const fontend = ["HTML", "CSS"];
const backend = ["Node.js", "MongoDB"];

const fullstack = fontend.concat(backend);
console.log(fullstack);
// 
const firstName = ["Snigdho"];
const lastName = ["Roy"];

const fullName = firstName.concat(lastName);
console.log(fullName);

// join():
const fruits = ["Banana", "Mango", "Orange"];
console.log(fruits.join()); //by default it use comma
console.log(fruits.join(" "));
console.log(fruits.join(" - "));
// 
const num = [1,2,3,4,5];
console.log(num.join(" "));
//
const skills = ["HTML", "JavaScript", "CSS"];
console.log(skills.join(", "))

// slice(start, end): start-include, end-not include
const numbers = [10, 20, 40, 50, 60];
const result = numbers.slice(1, 4);
console.log(result);
// 
const n = [1,2,3,4];
const copy = n.slice();
console.log(copy);
// 
const nn = [10,20,30,40];
console.log(nn.slice(-2));

// Array.isArray():
const town = ["Dinajpur", "Rangpur", "Dhaka", "Maldivs"];
const name = "Snigdho"
console.log(Array.isArray(town));
console.log(Array.isArray(name));

// practice
// 1
const a = [1, 2];
const b = [3, 4];
console.log(a.concat(b));

// 2
const words = ["I", "Love", "JavaScript"];
console.log(words.join(" "));
// 3
const numbers = [10, 20, 30, 40, 50];
console.log(numbers.slice(1, 4));
// 4
const data = ["HTML", "CSS"];
console.log(Array.isArray(data));
// challenge
const fruits = ["Apple", "Banana", "Orange", "Mango"];
console.log(fruits.slice(1, 3));