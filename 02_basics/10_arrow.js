const user ={
    username:"vivek",
    price:999,

    welcomemessage: function(){
        console.log(`${this.username},welcome to website`);
    }
}

user.welcomemessage()

function chai(){

    console.log(this);
}
chai();

//const chai = function()
// same as
// const chai = () =>

    const chai = () =>{
        let username ="vivek";
        console.log(this);

    }

    chai()


const addtwo = (num1 , num2)=>{
    return (num1+num2);

}

console.log(addtwo(3,5));


