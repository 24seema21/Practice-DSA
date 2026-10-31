const arr = [1,2,3,45,40];

//add and remove
arr.push(50);
//console.log("Array", arr);
arr.pop();
//console.log("Pop Array", arr);

//extract without modifying orignal
const result = arr.slice(1,3);
//console.log(result)

//insert and remove
arr.splice(1,1,100);

//search
const isPresent = arr.includes(30);
console.log("Present?" , isPresent)
const indexofnum = arr.indexOf(40);
console.log("index", indexofnum)
console.log(arr);
//Fill
const zeros = Array(5).fill(0);
console.log("zeros",zeros);
//Create an array

const num = Array.from({ length: 5}, (_, i)=> i+1)                  
const len = [1,23,44,23,65,345,34]
len.sort((a,b)=>a-b)
console.log("asc sorting", len)
len.sort((a,b)=>b-a)
console.log("desc sorting", len)

