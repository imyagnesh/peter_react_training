// CRUD Operation  usinbg immutable Javascript

const obj = {
    a: 1,
    b: 2,
    c: 3,
};

// mutable way to delete propety
// delete obj.b;

console.log(obj)

// OLD Javascript Technic
const obj1 = Object.assign({}, obj, { d: 4 });

// New Javascript 
// Spread Operatoer
// ...(Spread Operator)
// Example of Add new Value in object using immutable javascript
// When you need to add new property add b4 spead operator
const obj2 = {d: 4, e: 5, ...obj };
console.log(obj2);
console.log(obj);

// Update Object value using Immutable javascript
// When you need to update new property add b4 spead operator
const obj3 =  {...obj, b: 4};
console.log(obj3);
console.log(obj)

// delete propety/properties we have to use object destructor

const user = {
    fName: 'Yagnesh'
}

const {fName: firstName} = user;

console.log(firstName)

const a = 3;
// console.log(obj.a)
// console.log(obj.b)
const { a: abc , ...rest } = obj;
console.log(a)
console.log(abc)
console.log(rest);




