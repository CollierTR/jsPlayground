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

// splice() - 'splice into an array' - can be used to delete, select from, and add to an array - returns the deleted items as an array
// splice(start, deleteCount, item1, item2)
console.log(mixedArray);
mixedArray.splice(0, 5, 30, ...oneToTen);
console.log(mixedArray);

// at()
const junkFoodILove = [
  "🍕",
  "🍔",
  "🍟",
  "🥓",
  "🥞",
  "🧇",
  "🌯",
  "🫔",
  "🍖",
  "🍗",
  "🥩",
  "🍠",
  "🥟",
  "🥡",
  "🍱",
  "🍙",
  "🍜",
  "🍣",
  "🍤",
  "🍩",
  "🍦",
  "🥧",
  "🍫",
  "☕",
  "🍺",
  "🫒",
];
console.log(junkFoodILove.at(-5)); // you can use this to pull an item from an array by counting backwards.

// copyWithin() - copys a section of an array to a target location in the array
console.log("copyWithin");
const oneToThree = [1, 2, 3];
console.log(oneToThree);
oneToThree.copyWithin(2, 0, 3);
console.log(oneToThree); // apparently it will only overwrite already taken indexes and will not add additional indexes... :(

// flat(int: level of flatening - can use 'infinity') - flatens nested arrays - non-mutating - it will only flaten the first level of nesting by defualt.
const nestedArray = [1, 2, [3, 4]];
console.log(nestedArray);
nestedArray.flat(); // this doesn't work since it's a non-mutating method.
console.log(nestedArray.flat());

// grouping
// groupBy() - this will group a - This is new and will not work in node 18...
const employees = [
  { name: "Bob", dept: "Engineering", salary: 5000 },
  { name: "Alex", dept: "HR", salary: 3000 },
  { name: "Ravi", dept: "Engineering", salary: 7000 },
  { name: "John", dept: "Engineering", salary: 1000 },
  { name: "Tom", dept: "Sales", salary: 6000 },
];

console.log(employees);
//const groupedByDepot = Object.groupBy(employees, ({ dept }) => dept);
//console.log(groupedByDepot);

// custom grouping
//const groupedBySales = Object.groupBy(employees, ({salary}) => {
//return salary >= 5000 ? "5K+" : "<5K";
//});

//toReversed() - like reverse() but it doesn't mutate the source array

// toSorted() - like sort() but it doesn't mutate the source array

// toSliced() - like slice() but it doesn't mutate the source array

{
  // with() -
  const nums = [1, 2, 3, 4, 5];
  nums[2] = 6; // This mutates the array...
  console.log(nums);

  // with(index, value)
  // const newArray = nums.with(2, 6) // This does the samething but with a copied state so the source array doesn't change.
  // this doesn't work in node yet...
}

// ---------------------------------------------------------<{ Array Like }>
{
  const ob = { key: "value" }; // Object
  const array = [1, 2, 3]; // Array

  // 'Array Like' is close to an array but is missing the methods

  const arr_like = { 0: "I", 1: "am", 2: "array-like", length: 3 };
  console.log(arr_like);

  arr_like[2]; // 'array-like'
  arr_like.length; // 3

  // arr_like.pop() // this will not work.

  // Array Like is simply an object that acts like an Array. It has keys that act like an index and a .length attribute/method
}

// -----------------------------------------------------------------------------------<{ Iterator functions/mothods }>
// ---------------------------------------------------------<{ filter() }>
// array.filter(elementIteration, index, arraySelfReferance) - returns (to the new array) the iterations that return TRUE | non mutating
{
  const customers = [
    {
      id: 1,
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      phone: "(555) 123-4567",
      address: "123 Maple St, Springfield, IL",
      joined: "2023-05-10",
      isActive: true,
      totalSpent: 1280.75,
    },
    {
      id: 2,
      name: "Bob Smith",
      email: "bob.smith@example.com",
      phone: "(555) 987-6543",
      address: "456 Oak Ave, Metropolis, NY",
      joined: "2022-11-03",
      isActive: false,
      totalSpent: 547.2,
    },
    {
      id: 3,
      name: "Clara Martinez",
      email: "clara.martinez@example.com",
      phone: "(555) 765-4321",
      address: "789 Pine Rd, Gotham, NJ",
      joined: "2024-01-15",
      isActive: true,
      totalSpent: 2150.0,
    },
    {
      id: 4,
      name: "David Lee",
      email: "david.lee@example.com",
      phone: "(555) 321-9876",
      address: "321 Birch Ln, Star City, CA",
      joined: "2021-08-22",
      isActive: true,
      totalSpent: 349.99,
    },
    {
      id: 5,
      name: "Ella Wong",
      email: "ella.wong@example.com",
      phone: "(555) 654-1230",
      address: "159 Cedar Blvd, Central City, TX",
      joined: "2023-07-04",
      isActive: false,
      totalSpent: 890.55,
    },
  ];

  const filteredCustomers = customers.filter((customer) => {
    return customer.isActive == true;
  });

  console.log("Active Customers: ", filteredCustomers.length);
  console.log("All Customers: ", customers.length);

  // ---------------------------------------------------------<{ map() }>
}
