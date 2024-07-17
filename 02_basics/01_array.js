// array

const myArray= [0,1,23,4,5,7];

console.log(myArray[2]);

//Array methods

myArray.push(6);
myArray.push(68);
console.log(myArray);
myArray.unshift(9);
console.log(myArray);
console.log(myArray.includes(9));// it defines the treu and false i.e it shows the existence of the element;

//slice and splice

console.log('a',myArray);

const myn1=myArray.slice(1,3);
console.log(myn1); 


