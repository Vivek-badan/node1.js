// if 


// const isUserLoggedIn= true;
// const temp=41
// if(temp<46){
//     console.log('less than 46');

// }
// else {
//     console.log('greater than 46');
// }

const score=200

if (score>100){
    const power = "fly";
    console.log(`User power ${power}`);

}

// console.log  (`user power ${power}`)

const balance= 1000

// if(balance>500) console.log('test'),
// console.log('test2');//not good practice

if(balance>1500) {
    console.log('gretaer than 500');
}
else if(balance>500 && balance<800){
    console.log("between 800-500");

}

else if(balance<1500 & balance>800){
    console.log("between 1500-800");
}


const month=3;

switch (month) {
    case 1: 
    console.log('january');
        
        break;
    case 2: 
    console.log('feburary');
        
        break;
    case 3: 
    console.log('march');
        
        break;
        // if we dont put the break the whole code will run except the default case.
    case 4: 
    console.log('april');
        
        break;

    default:
        console.log('default case matched')
        break;
}