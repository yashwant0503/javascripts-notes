// Immediatly Invoked Function Expression

(function chai(){ //named iife 
    console.log(`DB CONNECTED`);
    
})();

 ( (name)=>{  // unnamed iife
    console.log(`DB CONNECTED TWO ${name}`);
    
} )('yash')