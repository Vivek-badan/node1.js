// const coding=['js','ruby','java','python','cpp'];

// const values = coding.forEach((item)=>{
//     return item;
// })
// console.log(values);
// is me for each value return nhi karta ha .

const mynums=[1,2,3,4,5,6,7,8,9,10];
// const newnums=mynums.filter((num)=> 
//     {return  num > 4
        
//     }
// );
const newnums=[];

mynums.forEach((num)=>{
    if(num>4){
        newnums.push(num)
    }
})

console.log(newnums);
