// Primitive Datatype
let myYoutubeName = 'hiteshchoudhrydotcom'
let anotherName = myYoutubeName;
anotherName = 'chaiaurcode'
// console.log(anotherName)
// console.log(myYoutubeName)

let userOne = {
    email: 'user@google.com',
    upi: 'user@ybl'
}

// Non-primitive Datatype
let userTwo = userOne;
userTwo.email = 'hitesh@google.com'

// console.log(userTwo.email);
// console.log(userOne.email);

const arr = [1, 2, 3, 4];
for (const num of arr) {
    // console.log(num);
}

const greetings = 'Hello world!';
for (const greet of greetings) {
    if (greet === ' ' || greet === '!') continue;
    // console.log(`Each char is ${greet}`);
}

// Maps
const map = new Map();
map.set('In', 'India');
map.set('PK', 'Pakistan');
map.set('In', 'India');
// console.log(map);

for (const key of map) {
    // console.log(key);
}

for (const [key, values] of map) {
    // console.log(key, ':-', values);
}

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    swift: 'swift by apple'
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ['js', 'cpp', 'swift'];
for (const key in programming) {
    // console.log(programming[key]);
}

const myNums = [1, 2, 3];

const myTotal = myNums.reduce((acc, currVal) => {
    console.log(`acc is ${acc} and current value is ${currVal}`)
    return acc + currVal
}, 0);

console.log(myTotal);