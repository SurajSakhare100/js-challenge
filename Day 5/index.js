// // Activity 1

// function isEvenOrOdd(n){
//     if(n%2==0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// function squareNum(n){
//     return n*n;
// }

// console.log(isEvenOrOdd(52))
// console.log(squareNum(90))

// // Activity 2

// function greaterNum(a,b){
//    return a>b?a:b
// }
// function concatenateStr(str1,str2){
//     return str1.concat(str2)
// }

// console.log(greaterNum(18,12))
// console.log(concatenateStr("i am ","suraj"))

// // Activity 3

// const sumOfTwoNum=(a,b)=>a+b
// const isCharPresent=(str)=>str.includes("S")


// console.log(sumOfTwoNum(8,11))
// console.log(isCharPresent("i am Suraj"))

// // Activity 4

// function productOfTwoNum(a,b=10){
//     return a*b
// }

// function greeting(name,age=18){
//     return `Hello ${name} your age is ${age} , stay happy it's just a number.. 🍷`
// }

// console.log(productOfTwoNum(2,7))
// console.log(greeting("Suraj"))
// console.log(greeting("Raj",23))

// // Activity 5

// function callNTimes(fn, n) {
//     return function(...args) {
//         for (let i = 0; i < n; i++) {
//             fn(...args);
//         }
//     };
// }

// function greet(name) {
//     console.log(`Hello, ${name}!`);
// }

// const greet3Times = callNTimes(greet, 3);
// greet3Times("Alice"); 


function composeTwo(fn1, fn2, value) {
    const result1 = fn1(value);
    const result2 = fn2(result1);
    return result2;
}

// Example usage
function add5(x) {
    return x + 5;
}

function multiplyBy2(x) {
    return x * 2;
}

const result = composeTwo(add5, multiplyBy2, 10);
console.log(result); 
