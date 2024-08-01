import myModule, { greet } from './script.js';
import axios from 'axios';
import lodash from 'lodash';

console.log(myModule.add(5, 3));  
console.log(myModule.sub(10, 4));  
console.log(myModule.pi);       
console.log(myModule.obj);    
myModule.hello();                 
greet()


console.log(lodash.chunk([1,12,3,4],2))

axios.get("https://potterapi-fedeperin.vercel.app/en/houses").then((res)=>{
console.log(res.data)
})