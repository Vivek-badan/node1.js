// const newLocal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newnums = mynums.map((num)=>num+10);
// Both are same :
// const newnums = mynums.map((num)=>{return num+10});
// when we put { } =  scope here we have to put the "return" here  to get the value of the same what we want to print.

// const mynumers=[1,2,3,4,5,6,7,8,9,10];
// const newnums = mynumers
//                         .map((num=>num*10))
//                         .map((num)=>num+1)
//                         .filter((num)=>num>=40)

// console.log(newnums);

//use3s for shopping apps
const mynums= [1,2,3];

// const mytotal = mynums.reduce(function(acc,currval){
//     console.log(`acc:${acc}and currval:${currval}`);
//     return acc+currval},0)
// console.log(mytotal);

// same as above but in the arrow function !!!!

// const mytotal = mynums.reduce((acc,curr)=>acc+curr,0)
// console.log(mytotal);


const shoppingcart=[

    {
        itemname: "js-course",
        price: 999
    },
    {
        itemname:"data-analyst course",
        price:12999
    },
    {
        itemname:"python course",
        price:9999
    },
    {
        itemname: "mobile-dev course",
        price: 5999
    },
]

const pricetppay=shoppingcart.reduce((accu,item)=>accu+ item.price,0)

console.log(pricetppay);

















