const score= 400;

const balance = new Number(100.3456788);
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(2));

console.log(balance.toLocaleString('en-IN'));


//*********MATHS******


console.log(Math);
console.log(Math.round(4.6));

const calci=(Math.random()*10) +1;
console.log(calci.toFixed(0));//between 0 and 1 ;

const min=10;
const max =20;

const math=Math.random() *((max-min+1)+min);
console.log(math);