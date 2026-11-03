 const names=['Linda','Ryan','Tim','Warren','Joe','Julie','Martin'];

console.log(names);
console.log(`First name: ${names[3]}`);
console.log(`Last name: ${names[names.length-1]}`);
console.log(`First name: ${names[2]}`);

names[3] = 'Cuckoo'; // Overwrite an element

let first =names.shift(); // Shift left so lose element 0
console.log(names);

let last = names.pop(); // remove the last element and returns it. Array shrinks
console.log(names);

names.push('Billy'); // Extend array and add at end. Array grows
console.log(names);

names.unshift('Bob'); // Extend and add at start
console.log(names);

// Splice syntax: array.splice(startIndex, deleteCount, item1, item2, item3, ...)
let middle = names.splice(2,3); // returns an array of 3 removed from 2 
console.log(names);

names.splice(2,0,'Jimmy'); // Insert at 2 remove none
console.log(names);

names.splice(3,0,'Jane', 'Sue', 'Sara'); // Insert multiple remove none

// If values are in an array
const moreNames = ['John', 'Paul', 'George', 'Ringo']; 
names.splice(3,0, ... moreNames); // Insert multiple remove none. ... is spread operator

// Javescript array elements don't need to all be the same type
 const vals=['Linda', 25, true, 7/3, 'Ryan'];

for (let i=(vals.length-1); i >=0 ; i--) {
  console.log(`vals are: ${vals[i]}`);
}

vals[0]=-1.5;
vals[3]='Bannana';

console.log(vals);
