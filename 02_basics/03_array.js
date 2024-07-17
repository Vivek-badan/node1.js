//singleton



//object literals
//Object.create

const mySym = Symbol('key1');

const Jsuser={
    name:'hitesh',
    age:21,
    [mySym]:'mykey1',
    location:"himachal",
    isLoggedIn: false,
    LastLogIn:true,
}
console.log(Jsuser);
console.log(Jsuser.name);
console.log(Jsuser['name']);
console.log(Jsuser[mySym]);


//Object.freeze(Jsuser);//it frrezes the the input and resisit the further changes .

Jsuser.greeting=function()
{
console.log('Hello Js user');
}

Jsuser.greetingTwo=function()
{
console.log(`Hello Js user ,${this.name}`);
}

console.log(Jsuser.greetingTwo);