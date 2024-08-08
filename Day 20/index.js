localStorage.setItem('key', 'value');
const localValue = localStorage.getItem('key');
console.log('localStorage value for "key":', localValue);

const localObj = {1: 2, name: "suraj"};
localStorage.setItem('obj', JSON.stringify(localObj));

const localStoredValue = localStorage.getItem('obj');
const localParsedObj = JSON.parse(localStoredValue);

console.log('localStorage storedValue for "obj":', localStoredValue);
console.log('localStorage parsedObj for "obj":', localParsedObj);

// Working with sessionStorage
sessionStorage.setItem('key', 'value');
const sessionValue = sessionStorage.getItem('key');
console.log('sessionStorage value for "key":', sessionValue);

const sessionObj = {1: 2, name: "suraj"};
sessionStorage.setItem('obj', JSON.stringify(sessionObj));

const sessionStoredValue = sessionStorage.getItem('obj');
const sessionParsedObj = JSON.parse(sessionStoredValue);

console.log('sessionStorage storedValue for "obj":', sessionStoredValue);
console.log('sessionStorage parsedObj for "obj":', sessionParsedObj);