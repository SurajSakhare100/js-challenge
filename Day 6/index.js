// Activity 1

let arr=[1,2,3,4,5];
console.log(arr)
console.log(arr[arr.length-1],arr[0])

// Activity 2

arr.push(6)
console.log(arr)
arr.unshift(0)
console.log(arr)
arr.pop()
console.log(arr)
arr.shift()
console.log(arr)

// Activity 3

const mapArr=arr.map((a)=>a*9)
const reduceArr=arr.reduce((x,y)=>x+y)
const filterArr=arr.filter((x)=>x>3)
console.log(mapArr)
console.log(reduceArr)
console.log(filterArr)

// Activity 4

arr.forEach(element => {
    console.log(element)
});
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

// Activity 5

let newarr = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];
let value = newarr[1][2];
console.log(value)
newarr[2][3] = 15; 
newarr.forEach(element => {
    console.log(element)
});
newarr.forEach(element => {
   element.forEach(e => {
    console.log(e)
   });
});