// Array Function
// console.log(Add(1,2));

// function Add(a, b) {
//     return a + b;
// }

// avoids hoiting problem
// Arrow function occupy less memory compare to normal function
// const add = (a, b) => {
//     if(a !== 0 && b && 0) {
//         return a + b;
//     } else {
//         return 0;
//     }
// }

// const add3 = a => a + 3;
// console.log(add3(3))

// console.log(add(1,2))

const add = (...rest) => {
  let sum = 0;
  for (let i = 0; i < rest.length; i++) {
    sum += rest[i];
  }
  return sum;
};

console.log(add(1, 2, 3));

// const calc = (operation, ...rest) => {
//     if (operation === 'add') {
//         let sum = 0;
//         for (let i = 0; i < rest.length; i++) {
//             sum += rest[i];
//         }
//         return sum;
//     }
//     if (operation === 'sub') {
//         let sum = 0;
//         for (let i = 0; i < rest.length; i++) {
//             sum -= rest[i];
//         }
//         return sum;
//     }
// }

const calc = (...rest) => operation => operation(...rest);

const mul = (...rest) => {
  let multiply;
  for (let i = 0; i < rest.length; i++) {
    if (!multiply) {
      multiply = rest[i];
    }
    multiply *= rest[i];
  }
  throw new Error('errro....');
  return multiply;
};

console.log(calc(1, 2, 3, 4)(add));
console.log(add(1, 2, 3));
// console.log(calc(1,2,3,4)(mul));
