const marvel_heroes= ['thor','Ironman','Spiderman'];
const dc_heroes=['Flash', 'Superman','Batman'];


marvel_heroes.push(dc_heroes);
console.log(marvel_heroes);

marvel_heroes.concat(dc_heroes);
console.log(marvel_heroes);

//spread method

const all_new_heroes= [...marvel_heroes,...dc_heroes];
console.log(all_new_heroes);

//.flat( ) it megers the arrays between ythe arrays 

const another_array=[1,2,3,[4,5,6],7,8,9];
const real_another_array= another_array.flat(Infinity);
console.log(real_another_array);

//.from('') : it makes the array of what you put in the square brackets.

console.log(Array.from('VIVEK BADAN !!!'))
console.log(Array.from({name:'vivek'}))
//interesting cas it gives the empty array


let score1= 100;
let score2= 200;
let score3= 300;
let score4= 400;

console.log(Array.of(score1,score2,score3,score4));