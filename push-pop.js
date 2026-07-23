// Push
const fruits = ["Banana"];
fruits.push("Snigdho", "Mango");
console.log(fruits) //print all fruits
console.log(fruits.length) //print only length
const newLength = fruits.push("Orange", "Apple");

console.log(fruits) 
console.log(newLength) //return new length;

// Pop
const names = ["Johir","Mohir","Kohir","Motin"];
names.pop(); //remove from last
console.log(names)

const removed = names.pop();
console.log(removed)

// unshift
const players = ["Neymar", "Ronalo", "Mbappe", "Rodri"];
players.unshift("Messi")
console.log(players)

// Shift
const data = ["Snigdho", 21, 'student'];
data.shift();
console.log(data)

const remove = data.shift();
console.log(remove)

// practice
// 1
const fruits = ["Apple", "Banana"];
fruits.push("Orange");
console.log(fruits);
// 2
const numbers = [10, 20, 30];

const remove = numbers.pop();
console.log(remove)
console.log(numbers)
// 3
const colors = ["Blue", "Green"];
colors.unshift("Red");
console.log(colors)
// 4
const cities = ["Dhaka", "Rangpur", "Rajshahi"];

const removed = cities.shift();
console.log(removed)
console.log(cities)