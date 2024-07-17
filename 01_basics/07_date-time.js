//Dates

let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(typeof myDate);

let myTimeStamp = Date.now();


console.log(Math.floor(Date.now()/1000));

 let newDate = new Date();
 console.log(newDate.getDay());
 console.log(newDate.getMonth());

 newDate.toLocaleString('default',{
    weekday:'long',
 })