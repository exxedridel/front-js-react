// - - - - - - - - - - - KEY CONCEPTS - - - - - - - - - - - - - - - - - - - -
// fetch (asynchronous)

// function getData() {
//   console.log(1);
//   fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then((res) => res.json())
//     .then((data) => console.log(2, data));
//   console.log(3);
// }

// getData();

// fetch synchronous

// async function getMoreData() {
//   console.log("a");
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//   const data = await response.json();
//   console.log("b", data);
//   console.log("c");
// }

// getMoreData();

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// pass by value
// const prim = 5;

// function add(value) {
//     value++;

//     return value;
// }
// // does NOT modify actual value
// console.log(add(prim), prim);

// // pass by reference
// const ref = { count: 5 };

// function add2(value) {
//     value.count++;

//     return value.count;
// }
// // does modify actual value
// console.log(add2(ref), ref.count);

// - - - - - - - - - isPangram() exercise - - - - - - - - - - - -
// const abc = "abcdefghijklmnopqrstuvwxyz";

// const isPangram = (string) => {
//   const processedString = [...new Set(string.toLowerCase().split(" ").join(""))].sort().join('')
//   // The Set object lets you store unique values of any type, whether primitive values or object references.
//   // ...new creates a new object with type object, it makes the this variable point to the newly created object.
//   return abc===processedString
// };

// console.log(isPangram("The quick Brown fox jumps over the lazy DOG"))
// console.log(isPangram("abcdefghijklmnopqrstuvwxyz"))
// console.log(isPangram("hello world"))

// with Regex
// const isPangramRegex = (string) => {
//   const regexMatchString = new Set(string.toLowerCase().match(/[a-z]/g));
//   // /g do a search of all occurrences of a regular expression in a string. Add /i to do a case insensitive = /gi
//   // .toLowerCase() still required
//   return regexMatchString.size === 26;
// };

// console.log(isPangramRegex("The quick Brown fox jumps over the lazy DOG"));
// console.log(isPangramRegex("JavaScript RegExp g Modifier"));

// - - - - - - - - - - - map() - filter() - reduce() - - - - - - - - - -
const nums = [1, 2, 3, 4, 5];
console.log(nums);

const numsAddOne = nums.map((value) => value + 1);
console.log(numsAddOne);

const evenNums = nums.filter((value) => value % 2 === 0);
console.log(evenNums);

// deep understanding of reduce()
const sum = nums.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}); // when no provided, first iteration will be between 1st and 2nd elements of array (4 iterations total)
console.log(sum); // result 15, in this case is same result as adding initialValue of 0

// const sum = nums.reduce((accumulator, currentValue) => {
//    accumulator++
//   return accumulator + currentValue;
// }, 0); // when initialValue provided first iteration will be beeteen initialValue and currentValue (5 iterations total)
// console.log(sum); // result 20

// resolving map() and filter() excercise with reduce()
const addOneEven = nums.reduce((accumulator, currentValue) => {
  currentValue++;
  if (currentValue % 2 === 0) {
    accumulator.push(currentValue);
  }
  return accumulator;
}, []); // initialValue
console.log(addOneEven);

// indexing with reduce()
const pets = [
  { nick: "Pelusa", age: 5, kind: "cat" },
  { nick: "Alberto", age: 6, kind: "dog" },
  { nick: "Solovino", age: 10, kind: "turtle" },
];

const indexed = pets.reduce(
  (acc, el) => ({
    ...acc,
    [el.nick]: el,
  }), {});
console.log(indexed);
console.log(indexed["Pelusa"]);

// conver nested to flat arrays
const nestedArr = [1, [2, 3], 4, [5]];
const flatArr = nestedArr.reduce((acc, el) => acc.concat(el), []);
console.log(flatArr);

// - - - - - - - - - Destructuring Objects and Arrays ES6- - - - - - - - - -
const dob = [10, 12, 1987];
const [day, month, year] = dob;

console.log(year);

const user = {
  f: "Dylan",
  l: "Camacho",
};

const { f: firstName, l: lastName } = user;
console.log(firstName, lastName);

// number extra of comas = number of elements avoided
const [greeting,, color,, type] = ["Hey", "yes", "blue", "apple", "array"];
console.log(greeting);
console.log(color);
console.log(type);
