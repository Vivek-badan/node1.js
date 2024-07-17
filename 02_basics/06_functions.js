
saymyname();
function saymyname(){
for(let i=0; i<54;i++) {

    const elle= `this is number ${i} and i love you ${i}millions times`;

    console.log(elle);

}
}

function loginUserMessage(username){
    if(username===undefined){
        console.log("please enter a username");
        return
    }
    return`${username} just looged in =>`

}
const ret = loginUserMessage("VIVEK");
console.log(ret);

