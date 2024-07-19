//for loop

// for (let i = 0; i <= 7; i++) {
//     const element = i;
    
//     if(element==5){
//         console.log("5 is the best number")
//     }
//  console.log(element);
    
// } 

// for(let i = 1; i<=10;i++){
//     console.log(`outer loop value ${i}`);
//     for(let j=0;j<=10;j++){
//         // console.log(`inner loop value ${j} and inner loop ${i}`);
        
//         console.log(i+'*'+j+'='+i*j);

//     }
// }



//BREAK and CONTINUE



// => BREAK .

for (let i=0;i<=20;i++){
    if (i==5){
        console.log(`detected 5`);
        break;
    }
    console.log(`Value of i ${i}`)
}

// => CONTINUE.

for (let i=0;i<=20;i++){
    if (i==5){
        console.log(`detected 5`);
        continue;
    }
    console.log(`Value of i ${i}`)
}




