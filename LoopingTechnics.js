// map
// reduce
// for in
// for of

const arr = [1, 2, 3, 4, 5];

const a = null;
const b = 2;

const c = a || b;
const d = a && b;
//  and condition is equal to if condition
if (a) {
}

console.log(c);
console.log(d);

// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
// }

// console.log(sum)

// first paramerter is function
// second parameter is initial value
const sum = arr.reduce((p, c) => p + c, 0);
console.log(sum);

const obj = {
  a: 1,
  b: 2,
  c: 3,
};

// const d =  'd';

// console.log(obj[d]);

// es 6

const users = [
  {
    id: 1,
    name: 'Yagnsh',
    gender: 'Male',
  },
  {
    id: 2,
    name: 'Peter',
    gender: 'Male',
  },
  {
    id: 2,
    name: 'Dipika',
    gender: 'Female',
  },
  {
    id: 2,
    name: 'Priyanka',
    gender: 'Female',
  },
];

const groupBy = users.reduce((p, c) => {
  (p[c.gender] = p[c.gender] || []).push(c);
  return p;
}, {});

console.log(groupBy);

// const updatedUserList = users.reduce((p, c) => {
//     if(c.id === 1) {
//         return [...p, {...c, name: 'Yagnesh' }]
//     }
//     return [...p, c]
// }, []);

// console.log(updatedUserList)

// {
//     Male: [ /* all males */ ],
//     Female: [/* all females */]
// }

// reduce loop most powerful loop

//  1000000

// 2;

// max time taken proces are  traversing, iteration

// 2 times
const index = users.findIndex(value => {
  console.log(value.id);
  return value.id === 1;
});

// up
const updatedUsers = [
  ...users.slice(0, index), // take all records b4 index
  { ...users[index], name: 'Yagnesh' }, // updated object
  ...users.slice(index + 1), // take all records after index
];

//
const updatedUsers1 = users.map((v, i) => {
  console.log(v.id);
  if (v.id === 1) {
    return { ...v, name: 'Yagnesh' }; // updated record
  }
  return v;
});

console.log(updatedUsers1);

console.log(updatedUsers);

const arr = [1, 2, 3, 4, 5];

const obj = { a: 1, b: 2, c: 3 };

for (const [key, value] of Object.entries(obj)) {
  console.log(key);
  console.log(value);
}
