const userEmail='vivekbadan@gmail.com';

if(userEmail){
    console.log('Got a user Email');
}
else{
    console.log('dont have a Email');
}

//falsy values

// false,0,-0,BigInt,0n,"",null,undefined,NaN;

// truthy values
// "0","false",[],{},function(){}
// empty function ,string all are truthy values

if (userEmail.length==0){
    console.log("array is empty");
}

const emptyobj={};
if (Object.keys(emptyobj)){
    console.log('emptyyuuiio');
}


// Nullish Coalescing Operator (??) : null undefined;

let val1;
val1=5??10;
val2 = null?? 10;
val3=undefined??34;

console.log(val1);
console.log(val2);
console.log(val3);


// Terniary Operator

// condition ? true: false;

const iceTeaPrice=100;

iceTeaPrice>=80 ? console.log('lessthan 80'):console.log("more than 80");

