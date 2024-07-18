//IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)

(function chai(){
   //NAMED IIFE
    console.log("db connected one ");
}) ();


//GLOBAL SCOPE KA POLLUTION SE PROBLEM HOTI HA TOH US VARIABLE KA POLLTION KO HATANA KA LIYA iife LKJA USE KARTA HA 

((name)=>{
   console.log(`db connected two ${name}`);

}) ('vivek')

