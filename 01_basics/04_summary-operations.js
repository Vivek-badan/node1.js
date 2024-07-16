//primitive

// 7 types : string , number , boolean, null,undefined,symbol,bigint.

const score = 100;
const scoreValue = 100.3;

const isLoggedIn= false;
const outsideTemo= null;
let useremail;

const id= Symbol('123');
const anotherId= Symbol("123");

console.log(id===anotherId);

const bigNumber=21345678;



// refference (non-primitive)

//Array, objects, functions

const heros= ['shaktiman', 'naagraj', 'doga'];
let myObject= {
    name:'vivek',
    age:22,
}

const myFunction=function(){
    console.log('hello world');
}

console.log(typeof bigNumber);
