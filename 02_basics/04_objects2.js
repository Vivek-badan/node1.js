const tinderUser = new Object();//singleton object

const tindeRUser = {};//non-singleton object .

 tindeRUser.id = "123abc";
 tindeRUser.name = "vivek";
 tindeRUser.isLoggedIn= false;




console.log(tinderUser);
console.log(tindeRUser);

///********other one */

const regularuser ={
    email:"some@gmail.com",
    fullname:{
        userfullanme:{
            firstname: "vivek",
            lname:"badan",

        }
    }
}

console.log(regularuser.fullname.userfullanme);


const obj1= {1:'a',2:'b'};
const obj2={3:'d',4:"g"};
const obj3=Object.assign({},obj1,obj2);
console.log(obj3);

const users = [

    {
        id:1,
        name:'ndhdf',

    }
]

console.log(Object.keys(tindeRUser));