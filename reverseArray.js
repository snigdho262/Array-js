let numbers = [10, 20, 30, 40, 50, 60];
console.log(numbers.reverse())
// 
let fruits = ["Apple", "Banana", "Mango", "Orange", "Guava"];
fruits.reverse();
console.log(fruits);
// 
let num = [10, 15, 20];
console.log(num);
num.reverse();
console.log(num);
// 
let original = [1,2,3,4,5,6];
let reversed = original.slice().reverse();
console.log(original);
console.log(reversed);
// sort():
let number = [5,7,8,9];
console.log(number.sort());
let rev = number.reverse();
console.log(number);
// practice
// 1
let color = ["Red", "Green", "Blue", "Yellow"];
console.log(color.reverse());
// 2
let nums = [5, 10, 15, 20];
console.log(nums.slice().reverse());
console.log(nums);
// 3
[ 'D', 'C', 'B', 'A' ];

// Add loops on array
let fruits = ["Apple", "Banana", "Mango"];
for(let i = 0; i<fruits.length; i++){
    console.log(fruits[i]);
}
// 
let numbers = [10,20,30,40,50];
for(let i = 0; i<numbers.length; i++){
    console.log(numbers[i]);
}
// sum of all elements
let num = [10,15,20,25,30];
sum = 0;
for(let i = 0;i<num.length;i++){
    sum += num[i];
}
console.log("Total: ",sum);


//******* */ Largest number
let numbers = [15,80,85,55,60,40,50,10];
let large = numbers[0];
for(let i = 1; i<numbers.length; i++){
    if(numbers[i]>large){
        large = numbers[i];
    }
}
console.log(large);
//*********** */
let number = [90,15,45,20,25];
let largest = number[0];
for(let i = 0; i<number.length; i++){
    if(number[0]>largest){
        largest = number[0];
    }
}
console.log(largest);


// print only even numbers
let numbers = [10,20,25,14,18,27,28,30];
for(let i = 0; i<numbers.length; i++){
    if(numbers[i]%2 === 0){
        console.log(numbers[i]);
    }
}
// reverse print without reverse():
let num = [2,5,3,10,8,15,20];
for(let i = num.length-1; i>= 0; i--){
    console.log(num[i]);
}

// 
let fruits = ["Banana","Apple","Mango", "Orange"];
for(let i = fruits.length-1; i>=0; i--){
    console.log(fruits[i]);
}

// practice
// 1
let cities = ["Dhaka", "Rajshahi", "Khulna","Sylhet"];
for(let i = 0; i<cities.length; i++){
    console.log(cities[i]);
}
// 2
let marks = [70,85,90,65,80];
let sum = 0;
for(let i = 0; i<marks.length; i++){
    sum += marks[i];
}
console.log(sum);
// 3
let marks = [70,85,90,65,80];
let avg = 0;
let sum = 0;
for(let i = 0; i<marks.length; i++){
    sum += marks[i];
    avg = sum/marks.length;
}
console.log(avg);
//4
let nums = [1,2,3,4,5,6,7,8];
let even = 0;
for(let i = 0; i<nums.length; i++){
    if(nums[i]%2 === 0){
        console.log(nums[i]);

        even++;
    }
} 
console.log(even);
// 5
let nums = [45,12,78,5,34];
let smallest = nums[0];
for(let i = 0; i<nums.length; i++){
    if(nums[i]<smallest){
        smallest = nums[i];
    }
}
console.log(smallest)
// challenge
let colors = ["Red", "Green", "Blue", "Yellow"];
for(let i = colors.length - 1;i>=0; i--){
    console.log(colors[i])
}
