// module.js

// Define functions
function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

// Define class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

// Create an instance of Person
const obj = new Person("Kunal", 34);

// Define constants
const pi = 3.14;

// Define a function
function hello() {
    console.log("hello");
}
export function greet() {
    console.log("greet");
}

// Export everything as a single object
const myModule = {
    add,
    sub,
    pi,
    obj,
    hello
};

export default myModule;
