// nested  scope

function one() {
    const username= "vivek";

    function two(){
        const website="utube";
        console.log(username);
    }

    //console.log(website);

    two();

}
one()

addone(5)
function addone(value){
    return (value+1);
}


