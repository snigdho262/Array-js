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