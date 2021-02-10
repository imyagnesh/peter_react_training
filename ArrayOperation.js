const arr = [1, 2, 3, 4, 5];
// Mutable;

// arr.push(6);
// console.log(arr);
// arr.pop();
// console.log(arr)
// arr.unshift(7)
// console.log(arr);
// arr.shift();
// console.log(arr);

const arr1 = [6, ...arr];
console.log(arr1);

const index = arr.findIndex(value => value === 3);

console.log(index);

// const s1 = arr.slice(0, index);
// console.log(s1);
// const s2 = arr.slice(index + 1);
// console.log(s2);
// const arr3 = [...s1, 6, ...s2];
// console.log(arr3)

// [1,2, 6,3,4,5]
// update value
const arr3 = [...arr.slice(0, index), 6, ...arr.slice(index + 1)];
const arr31 = arr.map(x => (x === 3 ? 6 : x));
console.log(arr3);
console.log(arr31);
// remove value
const arr4 = [...arr.slice(0, index), ...arr.slice(index + 1)];
const arr41 = arr.filter(x => x !== 3);
console.log(arr4);
console.log(arr41);
// add value at position
const arr5 = [...arr.slice(0, index), 6, ...arr.slice(index)];
console.log(arr5);
