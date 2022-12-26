// ============== Introduction of Data declaraion ===================
//In JavaScript there are 3 types of data declaration.
// let, var, const
// In var we can declare and assign data at any time.
//In let we can only once declare data and reassign anytime.
//In const we can only once declare and assign data.
//Example
var carWithVar = "Fiat";
console.log(carWithVar);

let carWithLet = "Mercedez";
console.log(carWithLet);

const carWithConst = "Ferreri";
console.log(carWithConst);


// ============== Introduction of Datatype ===================
//There are two type of datatype. 1. Primitive 2. Non - primitive
//In primitive there are 5 types of data. They are string, number, boolean, undefined, null.
//String is a set of characters.
//In non - primitive there are 3 types of data. They object, array, function.
//Let's go to the example.
//Primitive
let person = "Tanim";
console.log(person);

let digit = 20;
console.log(digit);

let answer = true;
console.log(answer);

let notDefined = undefined;
console.log(notDefined);

let vaccume = null;
console.log(vaccume);

let largeNumber = BigInt(457345689975544);
console.log(largeNumber);

//Non - primitive
const personDetail = {
    name: "Tanim",
    age: 27,
    designation: "Software Engineer"
};
console.log(personDetail.name);
console.log(personDetail['age']);
console.log(personDetail.designation);

const personArr = ["Tanim", 27, "Software Engineer"];
console.log(personArr[0]);
console.log(personArr[1]);
console.log(personArr[personArr.length - 1]);

function fullName(firstName, lastName) {
    return firstName + " " + lastName;
}

const nameDetail = fullName("Kowser", "Tanim");
console.log(nameDetail);

//Loop: Loop is a thing which execute a task repeatedly. That means to do a task repeatedly we use loop.
// There are 7 kinds of loop in JavaScript. They are while, do - while, for, forEach(), map(), for in, for of.
//Examples are given below:

let i = 5;
while (i < 10) {
    console.log(i + " is less than 10");
    i++;
}

let j = 7;
do {
    console.log(j + " is less than 10");
    j++;
}
while (j < 10);

for (k = 0; k < 5; k++) {
    console.log(k);
}

// forEach() loop
// First thing is that forEach() function works on an array and it's a prototypal method.
// forEach() method takes a call back function and operate on each of the array element.
// Call back function first parameter will be item value and second parameter will be index of array.
let randomArr = [10, 20, "hi", true]; // Defining an array
randomArr.forEach(function(item, index) {
    console.log(`Element[${index}] value is ${item}`);
});

//map() loop
// map() is also a prototypal method works on an array and creates a new array having returned values generated a function execution over a given array.
// map() method takes a function as arguement which function has three parameters. First parameter is the current value that means current item, second parameter is index of the array and third parameter is the whole array.
let multiNumbers = [10, 20, 30, 40, 50];
let doubleMultiNumbers = multiNumbers.map(function(index) {
    return index * 2;
});
console.log(doubleMultiNumbers);

//For...in loop
// This loop works on properties of an object.
const carDetail = {
    name: "Mercedez",
    model: 2007,
    color: "Blue",
    brandCountry: "Germany",
    parts: {
        door: 4,
        gear: 1,
        wheel: 4,
        seats: {
            front: 2,
            back: 2
        }
    }
};

function isObject(property, value) {
    if (property !== null && property !== Array.isArray()) {
        console.log(property);
    }
}

for (let car in carDetail) {
    // if (isObject(carDetail[car])) {
    //     for (innercar in carDetail[car]) {
    //         console.log(`${innercar} => ${carDetail[car][innercar]}`);
    //     }
    // } else {
    //     console.log(`${car} => ${carDetail[car]}`);
    // }
    console.log(carDetail[car]);
}

// for...of loop
// It works on any iterable objects like Array, String, Map, WeakMap, Set, arguements object, TypedArray and even general objects.
let country = "Bangladesh";
for (let chars of country) {
    console.log(chars);
}

// Helooooooooooooooo