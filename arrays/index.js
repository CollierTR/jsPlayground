const name = ["T", "r", "i", "s", "t", "a", "n"];


// ---------------------------------------------------------<{ destructuring }>
const [tomato, mushroom, carrot] = ["🍅", "🍄", "🥕"];

const [firstNum, ...rest] = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // You can spread the remaining array into a variable
console.log(firstNum);
console.log(rest);

// you can use destructuring to swap the values of two variables
let firstName = "Skywalker";
let lastName = "Anakin";
console.log(firstName, lastName);
// oh, no! those values need to be switched!
[firstName, lastName] = [lastName, firstName];
console.log(firstName, lastName);

// ---------------------------------------------------------<{ Rest Param and Spread }>
const [...test] = name; // this copies the array
console.log(test);
console.log(...name); // this turns the array into a spaced string
console.log("T", "r", "i", "s", "t", "a", "n"); // this does the same thing

// ---------------------------------------------------------<{ Merging Arrays }>
const redMeat = ["Beef", "Buffalo"];
const whiteMeat = ["Chicken", "Fish"];
const meat = [...redMeat, ...whiteMeat];
console.log(meat);

// ---------------------------------------------------------<{ Array Methods }>
// length()
console.log(name.length);
name.length = 0; // This will delete the contents of the array.
console.log("name is now empty:", name);

// concat()
const firstArr = [1, 2, 3, 4];
const secondArr = [5, 6, 7];
const merged = firstArr.concat(secondArr);
console.log(merged); // this creates a new array in memory.

// join()
const joinedArr = firstArr.join(""); // this will join the Arr with no separator
console.log(joinedArr);

// fill() - mutation - replaces all values in the Array
firstArr.fill("Dark Mode is Awesome!");
console.log(firstArr);
firstArr.fill("Changed again!", 1, 3); // you can specify a range for the method
console.log(firstArr);

// includes() - returns a boolean
const includesTest = [2, 34, 53];
console.log(includesTest.includes("T")); // returns false
console.log(includesTest.includes(34)); // returns true

// indexOf() - returns the index of the first existing element - returns -1 if un-found
console.log(includesTest.indexOf(2)); // returns 0
console.log(includesTest.indexOf("d")); // returns -1

// lastIndexOf() - same as indexOf, but in reverse

// reverse() - reverses the Array - mutates
const oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(oneToTen);
oneToTen.reverse();
console.log(oneToTen);

// sort() - converts values to string
const mixedArray = [2, 4, 2, 3, 4, 35, 11, 1, 122, 0];
mixedArray.sort(); // this will sort alphabetically, but not numerically.
console.log(mixedArray);
mixedArray.sort((a, b) => a - b); // this will sort numerically.
console.log(mixedArray);
mixedArray.sort((a, b) => b - a); // this will desc sort numerically.
console.log(mixedArray);
// Using the callback is called in this case a 'comparitive function'.
// You can write a comparitive function for strings to create a descending sort.



// ---------------------------------------------------------<{  }>
