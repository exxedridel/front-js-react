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
// const nums = [1, 2, 3, 4, 5];
// console.log(nums);

// const numsAddOne = nums.map((value) => value + 1);
// console.log(numsAddOne);

// const evenNums = nums.filter((value) => value % 2 === 0);
// console.log(evenNums);

// // deep understanding of reduce()
// const sum = nums.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }); // when no provided, first iteration will be between 1st and 2nd elements of array (4 iterations total)
// console.log(sum); // result 15, in this case is same result as adding initialValue of 0

// const sum = nums.reduce((accumulator, currentValue) => {
//    accumulator++
//   return accumulator + currentValue;
// }, 0); // when initialValue provided first iteration will be beeteen initialValue and currentValue (5 iterations total)
// console.log(sum); // result 20

// resolving map() and filter() excercise with reduce()
// const addOneEven = nums.reduce((accumulator, currentValue) => {
//   currentValue++;
//   if (currentValue % 2 === 0) {
//     accumulator.push(currentValue);
//   }
//   return accumulator;
// }, []); // initialValue
// console.log(addOneEven);

// // indexing with reduce()
// const pets = [
//   { nick: "Pelusa", age: 5, kind: "cat" },
//   { nick: "Alberto", age: 6, kind: "dog" },
//   { nick: "Solovino", age: 10, kind: "turtle" },
// ];

// const indexed = pets.reduce(
//   (acc, el) => ({
//     ...acc,
//     [el.nick]: el,
//   }), {});
// console.log(indexed);
// console.log(indexed["Pelusa"]);

// // conver nested to flat arrays
// const nestedArr = [1, [2, 3], 4, [5]];
// const flatArr = nestedArr.reduce((acc, el) => acc.concat(el), []);
// console.log(flatArr);

// - - - - - - - - - Destructuring Objects and Arrays ES6- - - - - - - - - -
// const dob = [10, 12, 1987];
// const [day, month, year] = dob;

// console.log(year);

// const user = {
//   f: "Dylan",
//   l: "Camacho",
// };

// const { f: firstName, l: lastName } = user;
// console.log(firstName, lastName);

// // number extra of comas = number of elements avoided
// const [greeting,, color,, type] = ["Hey", "yes", "blue", "apple", "array"];
// console.log(greeting);
// console.log(color);
// console.log(type);

// - - - - - - - - - - API array methods - - - - - - - - - - -

// my solution, array methods are ok, but can't invoke what the function returns in a console.log bc response is asynchronous
// function getUsers() {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((res) => res.json())
//     .then((data) => {
//       const resultArr = data
//         .filter((el) => el.name.match(/[k]/i))
//         .map((el) => {
//           return { name: el.name, email: el.email };
//         });
//       console.log(resultArr);
//       // return resultArr;
//     });
// }
// getUsers(); //needs a anonymopus function in order to console since fetch is async like below

// scrimba solution, with IIFE (inmedialty invoked function expression)
// const getUsers = async () => {
//   const api = "https://jsonplaceholder.typicode.com/users";
//   const response = await fetch(api);
//   const json = await response.json();

//   const result = json
//     .filter((v) => v.name.toLowerCase().includes("k"))
//     .map(({ name, email }) => ({ name, email }));

//   return result;
// };
// // IIFE
// (async function () {
//   try {
//     console.log(await getUsers());
//   } catch (err) {
//     console.log(err);
//   }
// })(); // this way function can be invoked

// - - - - - - - Excercise rain language translator - - - - - - - -

// My solution
// function toRainLanguage(integrer) {
//   const resultArr = []
//   if (integrer % 3 === 0) {
//     resultArr.push("Pling")
//   }
//   if (integrer % 5 === 0) {
//     resultArr.push("Plang")
//   }
//   if (integrer % 7 === 0) {
//     resultArr.push("Plong")
//   }
//   if (resultArr == false) {
//     resultArr.push(integrer) // Mine prints out a string, so is not enterily complete
//   }
//   return resultArr.join("")
// }
// console.log(toRainLanguage(105));
// console.log(toRainLanguage(2));

// Scrimba solution: Dimitri Ivashchuk
// const toRainLanguage2 = (number)=>{
//   let result = ''
//   if(number%3===0) result += "Pling"
//   if(number%5===0) result += "Plang"
//   if(number%7===0) result += "Plong"

//   return result || number //this xd
//   //return result ? result : number //same as this
// }
// console.log(toRainLanguage2(105))
// console.log(toRainLanguage2(2))

// - - - - - - - - Isogram check function - - - - - - - - - -

// My solution
// function isIsogram(string) {
//   const LowerCasedArr = string.toLowerCase().split("");
//   result = LowerCasedArr.filter((value, index, self) => self.indexOf(value) === index);
//   return result.length === string.length
//   // return result.length === string.length ? true : false //same as this
// }
// console.log(isIsogram("ambidExtRously")); // true
// console.log(isIsogram("patteRN")); // false

// Scrimba solution: Dimitri Ivashchuk
// const isIsogram = (string) => {
//   const lowerCased = string.toLowerCase();
//   const result = lowerCased.split("").every((v, i) => lowerCased.indexOf(v) === i);
//   // every returns true if every iteration is satisfied, false if not
//   return result;
// };
// console.log(isIsogram("ambidExtRously")); // true
// console.log(isIsogram("patteRN")); // false

// - - - - - - - - - Leap-year check function - - - - - - - - -

// My solution
// function isLeapYear(string) {
//   if (string % 4 == 0 && string % 100 != 0) {
//     return true;
//   } else if (string % 4 == 0 && string % 100 == 0) {
//     if (string % 400 == 0) {
//       return true
//     } else {
//       return false
//     }
//   } else {
//     return false
//   }
// }

// Scrimba solution: Dimitri Ivashchuk (using ternary - truthy n falsy)
// const isLeapYear = (year) => {
//   const numberYear = Number(year)
//   return numberYear % 100 === 0 ? numberYear % 400 === 0 : numberYear % 4 === 0
// }

// Mixing approaches (Scrimba's is better but just for understandment)
// function isLeapYear(year) {
//   if (year % 100 === 0) {
//     if (year % 400 === 0) {
//       return true;
//     } else {
//       return false;
//     }
//   } else if (year % 4 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isLeapYear("2020")); // true
// console.log(isLeapYear("2018")); // false
// console.log(isLeapYear("1700")); // false
// console.log(isLeapYear("1600")); // true

// - - - - - - - - Encoding / Decoding fucntion with replace() - - - - - - - -

const encode = (string) => {
  return string.replace(/(\w)\1+/g, (m, v) => `${m.length}${v}`);
};

const decode = (string) => {
  return string.replace(/(\d+)(\w)/g, (x, y, z) => z.repeat(y));
};
console.log(encode("wwwwwwwwiiuuuu")); // 3w2i4u
console.log(decode("2u3a4o")); // uuaaaoooo
