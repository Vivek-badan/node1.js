// stack (primitive) , heap (non-primitive)

// stack = nos, bollean : it gives copy of that 
// heap : it gives the reffrence;
 
let myYoutubeName= "vivekbadan";

let anothername =  myYoutubeName;

anothername="chaiaurcode";
console.log( myYoutubeName);
console.log(anothername);


let user= {

    email: "user@goggle.com",
    upi:"user@ybl",


}

let user2= user;

user2.email="vivek@google.com";
console.log(user);
console.log(user2);
