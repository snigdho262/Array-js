//**
// includes() - Checks if a value exists
// indexof() - Finds the position (index) of a value.

// includes:
const fruits = ["Banana", "Apple", "Orange"];
console.log(fruits.includes("Apple"));

// using if
const users = ["Rahim", "Karim", "Snigdho"];
if(users.includes("Snigdho")){
    console.log("User Found");
} else{
    console.log("User not Found");
}

//indexof: 
const names = ["Sagar", "Pagar", "Nagar"];
console.log(names.indexOf("Nagar"));

//......
const cities = ["Dhaka","Dinajpur", "Rangpur","Rajshahi"];
console.log(cities.includes("Dhaka"));
console.log(cities.indexOf("Dinajpur"));

// problems
// 1
const fruits = ["Apple", "Banana", "Orange"];
console.log(fruits.includes("Orange"));
// 2
const numbers = [5, 10, 15, 20];
console.log(numbers.includes(100));
// 3
const colors = ["Red", "Blue", "Green"];
console.log(colors.indexOf("Blue"));
// 4
const cities = ["Dhaka", "Khulna", "Rajshahi"];
console.log(cities.indexOf("Sylhet"));

