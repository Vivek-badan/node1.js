// FOR of

// ['','','','']

// [{},{},{}]

// const arr = [1,2,34,5,6];
// for (const i of arr){

//     console.log(i);
// }

// const greetings = 'HEELOO BABY';
// for(const i of  greetings ){
//     console.log(`Each char is ${i}`);
// }


// MAPS 
const map = new Map();
map.set('IN',"India");
map.set('USA',"United States of America");
map.set('FR',"France");

console.log(map);

for (const [key,value] of map){
    console.log(key , ':-',value);
}

// const myobject= {

//     'game1': "NFS",
//     'game2':"spiderman"
// }

// for (const [key,value] of myobject){
//     console.log(key , ':-',value);
// } 
// these doesnot work properly !!!


