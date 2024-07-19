const myobject={
    js: "Javascript",
    cpp:"C++",
    rb:"Ruby",
    swift:"Swift by Apple"

}
for (const key in myobject){
    console.log(`${key } shortcut is for ${myobject[key]}`);
    
}
